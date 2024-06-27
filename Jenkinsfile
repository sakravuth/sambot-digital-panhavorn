pipeline {
    // agent any

    agent { dockerfile true }

    tools {
        nodejs "node20"
    }

    environment {
        NPM_CONFIG_CACHE = "${env.WORKSPACE}/.npm" // Set npm cache directory to workspace
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build & Generate') {
            steps {
                sh 'npm run generate'
            }
        }

        stage('Build Image Docker') {
            steps {
                sh 'docker build . -t sakravuth/sambot-digital:latest'
            }
        }
        
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
    
}
