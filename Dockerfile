ARG VERSION
FROM liquibase/liquibase:$VERSION

USER root
RUN mkdir /proto && chown liquibase /proto
VOLUME /proto
WORKDIR /proto
USER liquibase

RUN lpm update && lpm add protobuf-generator@v0.3.7 --global
