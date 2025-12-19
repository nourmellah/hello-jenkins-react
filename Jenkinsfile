pipeline {
  agent any

  options {
    timestamps()
    skipDefaultCheckout(true)
  }

  environment {
    CI = "true"
    IMAGE = "hello-jenkins-react"
    PORT  = "3001"
  }

  stages {
    stage("Checkout") {
      steps { checkout scm }
    }

    stage("Install") {
      steps { sh "npm ci" }
    }

    stage("Lint") {
      steps { sh "npm run lint" }
    }

    stage("Test") {
      steps { sh "npm test" }
    }

    stage("Build") {
      steps { sh "npm run build" }
    }

    stage("Archive dist") {
      steps { archiveArtifacts artifacts: "dist/**", fingerprint: true }
    }

    stage("Docker Build") {
      steps {
        sh "docker build -t ${IMAGE}:${BUILD_NUMBER} -t ${IMAGE}:latest ."
      }
    }

    stage("Deploy (local)") {
      steps {
        sh """
          docker rm -f ${IMAGE} >/dev/null 2>&1 || true
          docker run -d --name ${IMAGE} -p ${PORT}:80 ${IMAGE}:latest
        """
      }
    }

    stage("Smoke test") {
      steps {
        sh """
          sleep 2
          curl -fsS http://localhost:${PORT} | head -n 5
        """
      }
    }
  }

  post {
    always {
      sh "docker logs ${IMAGE} --tail 50 || true"
      // optional cleanup:
      // sh "docker rm -f ${IMAGE} >/dev/null 2>&1 || true"
      deleteDir()
    }
  }
}
