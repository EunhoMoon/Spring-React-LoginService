# Spring-React-Toy-Project

### Springboot

- Springboot ^2.0
- MyBatis
- MySQL/MariaDB
- Maven
<!--
- Security
- OAuth2
  -->

### React

- npm i react-router-dom@5.2.0
- npm i redux react-redux
- npm i react-bootstrap bootstrap
<!--
- npm i react-summernote
- npm i jquery
  -->
- npm i styled-components
- npm i react-draft-wysiwyg draft-js
- npm i draftjs-to-html

```txt
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 프로젝트 세팅

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

### DB 테이블 세팅

```sql
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  name VARCHAR(256) NOT NULL,
  email VARCHAR(256),
  role  VARCHAR(256) DEFAULT 'USER',
  createDate DATETIME DEFAULT NOW(),
  lastLogin DATETIME
);

CREATE TABLE board (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  content VARCHAR(256) NOT NULL,
  writer INT,
  writeDate DATETIME DEFAULT NOW(),
  readCnt INT default 0,
  FOREIGN KEY (writer) REFERENCES user (id)
);
```

### To Do Lists

- JWT 토큰 및 암호화, 권한 설정
- 관리자 통계 페이지 구현
