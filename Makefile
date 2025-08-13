

proto-gen:
	protoc \
    	--plugin=./node_modules/.bin/protoc-gen-ts_proto \
      	--ts_proto_out=src \
  		--ts_proto_opt=nestJs=true \
  		--proto_path=proto \
  		proto/**/*.proto