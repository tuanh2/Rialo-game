const express = require(express);
const fs = require(fs);
const path = require(path);
const cors = require(cors);

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, leaderboard.json);

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, utf8);
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeData(arr) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(arr), utf8);
}

app.get(leaderboard, (req, res) = {
  const data = readData()
    .sort((a, b) = b.score - a.score  a.time - b.time)
    .slice(0, 50);
  res.json(data);
});

app.post(leaderboard, (req, res) = {
  const { name, score, time } = req.body  {};
  if (
    typeof name !== string 
    typeof score !== number 
    typeof time !== number
  ) {
    return res.status(400).json({ error invalid payload });
  }
  const entry = { name name.trim()  NoName, score, time, at Date.now() };
  const data = readData();
  data.push(entry);
  writeData(data);
  const sorted = data
    .sort((a, b) = b.score - a.score  a.time - b.time)
    .slice(0, 50);
  res.json(sorted);
});

const port = process.env.PORT  3000;
app.listen(port, () = {
  console.log(Server running on port, port);
});
