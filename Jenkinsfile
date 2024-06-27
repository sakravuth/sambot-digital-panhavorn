
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run generate'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'apt install npm'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         sh 'npm run generate'
        //     }
        // }
        
    }
    
}
