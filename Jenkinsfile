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
            agent any
            steps {
                sh 'docker build -t sakravuth/sambot-digital:latest .'
            }
        }

        stage('Docker Push') {
          agent any
          steps {
            withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubPassword', usernameVariable: 'dockerhubUser')]) {
              sh "docker login -u ${env.dockerhubUser} -p ${env.dockerhubPassword}"
              sh 'docker push sakravuth/sambot-digital:latest'
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
