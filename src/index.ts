import fetch from 'node-fetch';
import fs from "fs";

const DIR = "data";

async function setup() {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }

  const merkle = await fetch("https://merkle.cakedefi.com/root");
  const file = await merkle.json();
  const date = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(`${DIR}/${date}.json`, JSON.stringify(file, null, 2));
}

setup();