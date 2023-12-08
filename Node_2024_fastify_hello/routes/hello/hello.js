const hello = async (fastify, opts) => {
  fastify.get("/", async function (request, reply) {
    return { hello: "안녕하세요" };
  });

  fastify.get("/:name", async function (request, reply) {
    const { name } = request.params;
    return { hello: name };
  });
};
export default hello;
