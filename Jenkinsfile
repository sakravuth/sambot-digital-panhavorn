pipeline {
    agent any

    tools {
        nodejs "node20" // Ensure this Node.js tool is configured in Jenkins
    }

    environment {
        DOCKER_CONFIG = "${env.WORKSPACE}/.docker" // Set DOCKER_CONFIG to a directory within the workspace
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
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
            agent {
                docker { image 'docker:latest' }
            }
            steps {
                script {
                    // Create the Docker config directory within the workspace and set permissions
                    sh 'mkdir -p ${DOCKER_CONFIG} && chmod 700 ${DOCKER_CONFIG}'
                    // Use Buildx to build the Docker image
                    sh 'docker buildx build . -t sakravuth/sambot-digital:latest --platform linux/amd64'
                }
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
