import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3030;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;

const url = 'mongodb+srv://admin:qwer1234@dbtest.k0c53.mongodb.net/?retryWrites=true&w=majority';

new MongoClient(url).connect().then((client) => {
  console.log('DB 연결 성공');
  db = client.db('dbtest');

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('DB 연결 실패:', err);
  process.exit(1); // 연결 실패 시 프로세스 종료
});


// 환경변수에 저장된 ID와 PW
const idpw = JSON.parse(process.env.IDPW1);

const Id = idpw.loginId; // 기본값 'admin'
const Pw = idpw.password; // 기본값 '1234'

// 로그인 API
app.post('/api/login', (req, res) => {
  const { idSend, pwSend } = req.body;

  if (idSend === Id && pwSend === Pw) {
    // ID와 PW가 일치할 경우
    res.status(200).json({ message: '로그인 성공' });

    
  } else {
    // ID 또는 PW가 일치하지 않을 경우
    res.status(401).json({ message: '로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.' });
  }
});


/*
// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "client/build")));
*/
app.get("/", (req, res) => {
  res.send('루트페이지임')
});

app.post('/login',(req,res) => {
  
});

//비동기 처리 해줘야지만 작동함
/*
 * app.get('/data/add', async (req, res) => {
 
  try {
    const result = await db.collection('post1').insertOne({_id : 1, title: '게시물1', content:'게시물내용 뭐시기 뭐시기' });
    console.log("Inserted document:", result.insertedId);
    res.status(200).send('데이터 삽입 성공');
  } catch (err) {
    console.error("Insert failed:", err);
    res.status(500).send('데이터 삽입 실패');
  }
});
*/
app.get('/data/get', async (req, res) => {
  try {
    let result = await db.collection('post1').find().toArray(); // MongoDB에서 데이터를 조회
    res.status(200).json(result); // 조회된 데이터를 클라이언트로 전송
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("데이터 조회 실패"); // 에러 발생 시 클라이언트에 에러 메시지 전송
  }
});


app.post('/data/add', async (req, res) => {
  try{
    const { titleSend, contentSend } = req.body;
    
    // 컬렉션에서 가장 높은 `_id` 찾기
    const lastDocument = await db.collection('post1').find().sort({ _id: -1 }).limit(1).toArray();
    const nextId = lastDocument.length > 0 ? lastDocument[0]._id + 1 : 1;
    
    const result = await db.collection('post1').insertOne({
      _id : nextId,
      title: titleSend,
      content: contentSend
    });
    console.log("Inserted document");
    res.status(200).send('데이터 삽입 성공');

  }
  catch {
    // ID 또는 PW가 일치하지 않을 경우
    res.status(401).json({ message: '로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.' });
  }
});

app.post('/api/checkId', async (req, res) => {
  
    const { idCheck } = req.body;
    
    const Id = idpw.loginId; // 기본값 'admin'
												if (Id == idCheck){
												  res.status(555).send('아이디 중복 있음');
												} else{
												  res.status(200).send('아이디 중복 없음');
												}
  
  
});

