document.addEventListener('DOMContentLoaded', () => {
    const personnage = document.getElementById('personnage');
    const gameWorld = document.getElementById('game-world');
    const gameOver = document.getElementById('game-over');
    const restartMessage = document.getElementById('restart-message');
    const scoreDisplay = document.getElementById('score');
    const highScoreDisplay = document.getElementById('high-score');

    let isJumping = false;
    let isGameOver = true;
    let score = 0;
    let highScore = localStorage.getItem('dino-high-score') || 0;
    let gameSpeed = 5;
    let obstacleTimer = null;
    let gameLoopTimer = null;
    let nuageTimer = null;

    highScoreDisplay.textContent = `Meilleur : ${highScore}`;
    gameOver.style.display = 'block'; // Affiché au début
    restartMessage.style.display = 'block'; // Affiché au début

    // --- Fonctions de base du jeu ---

    /** Gestion du saut du personnage */
    function jump() {
        if (isJumping || isGameOver) return;

        isJumping = true;
        personnage.classList.add('saut');

        // Retire la classe 'saut' après la durée de l'animation
        setTimeout(() => {
            personnage.classList.remove('saut');
            isJumping = false;
        }, 600); // Doit correspondre à la durée de l'animation dans style.css
    }

    /** Création et animation des obstacles (cactus) */
    function createObstacle() {
        if (isGameOver) return;

        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        gameWorld.appendChild(obstacle);

        // Position de départ à l'extrême droite
        let position = gameWorld.offsetWidth;
        obstacle.style.left = `${position}px`;

        // Taille aléatoire pour la variété
        const height = Math.floor(Math.random() * 40) + 40; // entre 40px et 80px
        obstacle.style.height = `${height}px`;
        obstacle.style.width = `${Math.floor(Math.random() * 15) + 30}px`; // entre 30px et 45px

        // Animation de l'obstacle
        const moveInterval = setInterval(() => {
            if (isGameOver) {
                clearInterval(moveInterval);
                obstacle.remove();
                return;
            }

            position -= gameSpeed;
            obstacle.style.left = `${position}px`;

            // Supprimer l'obstacle une fois qu'il est sorti de l'écran
            if (position < -obstacle.offsetWidth) {
                clearInterval(moveInterval);
                obstacle.remove();
                // Augmenter le score après avoir réussi à passer l'obstacle
                score++;
                scoreDisplay.textContent = score;
            }

            // Détection de collision
            checkCollision(obstacle, moveInterval);
        }, 20); // Vitesse de rafraîchissement
    }

    /** Détection de collision */
    function checkCollision(obstacle, interval) {
        // Coordonnées du personnage
        const persoRect = personnage.getBoundingClientRect();
        const worldRect = gameWorld.getBoundingClientRect();
        const persoLeft = persoRect.left - worldRect.left;
        const persoRight = persoRect.right - worldRect.left;
        const persoBottom = worldRect.bottom - persoRect.bottom; // Distance au sol

        // Coordonnées de l'obstacle
        const obstacleRect = obstacle.getBoundingClientRect();
        const obstacleLeft = obstacleRect.left - worldRect.left;
        const obstacleRight = obstacleRect.right - worldRect.left;
        const obstacleBottom = worldRect.bottom - obstacleRect.bottom; // Distance au sol (doit être 3)

        // Logique de collision :
        // 1. Les bords horizontaux se chevauchent
        const horizontalOverlap = persoRight > obstacleLeft && persoLeft < obstacleRight;
        // 2. Le personnage n'est pas en l'air (bas du perso est au-dessus du haut de l'obstacle)
        // Note: on vérifie la position verticale, persoBottom est la distance au sol (3px quand au sol)
        const verticalOverlap = (persoBottom < obstacle.offsetHeight + 3) && (persoBottom > 0);

        if (horizontalOverlap && verticalOverlap) {
            clearInterval(interval);
            gameOverFunction();
        }
    }

    /** Création des nuages */
    function createNuage() {
        if (isGameOver) return;

        const nuage = document.createElement('div');
        nuage.classList.add('nuage');
        nuage.style.animationDuration = `${Math.random() * 15 + 25}s`; // Vitesse aléatoire
        nuage.style.top = `${Math.random() * 30 + 10}%`; // Position verticale aléatoire
        gameWorld.appendChild(nuage);

        // Suppression du nuage après son passage
        setTimeout(() => nuage.remove(), 40000); // 40 secondes
    }

    // --- Fonctions de gestion du jeu ---

    /** Démarrer le jeu */
    function startGame() {
        if (!isGameOver) return; // Déjà en cours

        isGameOver = false;
        score = 0;
        gameSpeed = 5;
        scoreDisplay.textContent = score;
        gameOver.style.display = 'none';
        restartMessage.style.display = 'none';
        
        // Nettoyer les anciens obstacles et nuages
        document.querySelectorAll('.obstacle').forEach(o => o.remove());
        document.querySelectorAll('.nuage').forEach(n => n.remove());

        // Démarrer la boucle de jeu principale (score, vitesse)
        gameLoopTimer = setInterval(() => {
            // Augmenter légèrement la vitesse toutes les 100 points
            if (score > 0 && score % 100 === 0) {
                gameSpeed += 0.5;
            }
        }, 100);

        // Démarrer la création d'obstacles
        obstacleTimer = setInterval(() => {
            createObstacle();
            // Temps aléatoire entre 1.5s et 3s
            const newInterval = Math.floor(Math.random() * 1500) + 1500; 
            // Arrêter l'intervalle actuel et redémarrer avec le nouveau délai
            clearInterval(obstacleTimer); 
            if (!isGameOver) {
                obstacleTimer = setInterval(() => {
                    createObstacle();
                }, newInterval);
            }
        }, 2000); // Premier obstacle après 2 secondes

        // Démarrer la création des nuages
        nuageTimer = setInterval(createNuage, 5000); // Un nuage toutes les 5 secondes

        // Démarrer l'animation du sol si vous en avez une (ici, c'est géré par le mouvement des obstacles)
    }

    /** Fin du jeu */
    function gameOverFunction() {
        isGameOver = true;
        
        // Arrêter tous les intervalles
        clearInterval(gameLoopTimer);
        clearInterval(obstacleTimer);
        clearInterval(nuageTimer);

        // Afficher l'écran Game Over
        gameOver.style.display = 'block';
        restartMessage.style.display = 'block';

        // Mettre à jour le meilleur score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('dino-high-score', highScore);
            highScoreDisplay.textContent = `Meilleur : ${highScore}`;
        }
    }

    // --- Événements (Contrôles) ---

    // 🖱️ Clic/Touche pour sauter
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
            if (isGameOver) {
                startGame();
            } else {
                jump();
            }
        }
    });

    // 👆 Contrôle tactile pour le mode smartphone
    gameWorld.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Empêche le défilement
        if (isGameOver) {
            startGame();
        } else {
            jump();
        }
    });

    // Clic sur le message de redémarrage
    restartMessage.addEventListener('click', startGame);

    // Initialisation au chargement
    // L'écran Game Over est déjà affiché par défaut pour inviter à démarrer
});
