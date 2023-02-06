// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Service = require("./dolarSiService");
const dolarSiService = new Service();

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(dolarSiService.getInfoDolar(req, res)));
}
