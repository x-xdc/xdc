bootstrap:
	./node_modules/.bin/lerna bootstrap
	cd packages/xdc-cli; \
	sh scripts/bootstrap.sh; \
	npm i

bootstrap-cn:
	cd packages/xdc; \
	npm --registry=https://registry.npm.taobao.org i; \
	npm --registry=https://registry.npm.taobao.org i babel-core babel-loader \
	css-loader file-loader postcss postcss-loader html-loader html-webpack-plugin \
	json-loader style-loader url-loader webpack@beta webpack-dev-server@beta \
	extract-text-webpack-plugin@beta; \
	cd ../xdc-cli; \
	sh scripts/bootstrap.sh; \
	npm --registry=https://registry.npm.taobao.org i