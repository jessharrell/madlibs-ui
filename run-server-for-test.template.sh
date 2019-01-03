SERVER_PATH=<path-to-server-repo>
E2E_SERVER_CONFIG_PATH=$(pwd)/e2e/test-server.config

function createTestServerConfig {
  echo '{' > ${E2E_SERVER_CONFIG_PATH}
  echo '    "PuzzleLocation": "'$(pwd)'/e2e/test-puzzles"' >> ${E2E_SERVER_CONFIG_PATH}
  echo '}' >> ${E2E_SERVER_CONFIG_PATH}
}

function cleanUp {
  rm ${E2E_SERVER_CONFIG_PATH}
  exit 0
}

trap cleanUp SIGTERM

createTestServerConfig

pushd ${SERVER_PATH}

yarn serve:e2e ${E2E_SERVER_CONFIG_PATH}
