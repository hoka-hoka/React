import { createServer, Model } from 'miragejs';

export default function makeServer(url) {
  const createToken = (args) => {
    if (args.newToken) {
      return (Math.random() * 10).toString().slice(2);
    }
    return false;
  };

  createServer({
    models: {
      d: Model,
    },

    routes() {
      this.get(`/api${url}`, (schema) => schema.d.all());

      this.post(`/api${url}`, (schema, request) => {
        const args = JSON.parse(request.sendArguments[0]);
        const token = createToken(args);

        const attrs = JSON.parse(request.requestBody);
        if (token) {
          attrs.token = token;
        }
        return schema.ds.create(attrs);
      });
    },
  });
}
