pipeline {
    agent any

    tools {
        nodejs "node20"
    }

    environment {
        NPM_CONFIG_CACHE = "${env.WORKSPACE}/.npm" // Set npm cache directory to workspace
    }

    stages {
        stage('Setup Docker Buildx') {
            steps {
                script {
                    // Install and initialize Docker Buildx
                    sh 'docker buildx create --use'
                    sh 'docker buildx inspect --bootstrap'
                }
            }
        }

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
            agent {
                docker { image 'docker:latest' }
            }
            environment {
                DOCKER_BUILDKIT = 1 // Enable BuildKit for better performance and features
            }
            steps {
                script {
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
