import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import imgA from '../img/report.png';
import Modal from './Modal';

const Reply = ({ boardId }) => {
  const [replyDatas, setReplyDatas] = useState([]);
  const link = 'http://localhost:9595/reply/' + boardId;
  const [replyId, setReplyId] = useState();
  const [reportContent, setReportContent] = useState({});

  // ==================================================
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    setReplyId(e.target.value);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetch(link, {
      method: 'GET',
    })
      .then((resList) => resList.json())
      .then((resList) => {
        setReplyDatas(resList);
      });
  }, [boardId]);

  const deleteReply = (e) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch('http://localhost:9595/reply/delete/' + e.target.value, {
        method: 'DELETE',
      })
        .then((delRes) => delRes.text())
        .then((delRes) => {
          if (delRes == 1) {
            alert('댓글이 삭제되었습니다.');
            window.location.replace('/board/detail/' + boardId);
          } else {
            alert('삭제에 실패하였습니다.  잠시 후 다시 시도해 주세요.');
          }
        });
    }
  };

  const reportReply = (e) => {
    setReplyId(replyId);
    fetch('http://localhost:9595/reply/report/' + replyId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        replyId: replyId,
        reportContent: reportContent,
        reporter: sessionStorage.getItem('id'),
      }),
    })
      .then((repRes) => repRes.text())
      .then((repRes) => {
        if (repRes === '1') {
          alert('댓글이 신고되었습니다.');
          window.location.replace('/board/detail/' + boardId);
        } else if (repRes === '2') {
          alert('이미 신고하신 댓글입니다. 신속히 처리하겠습니다.');
          window.location.replace('/board/detail/' + boardId);
        } else {
          alert('신고에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
          window.location.replace('/board/detail/' + boardId);
        }
      });
  };

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className=" position-relative mb-2"
    >
      {replyDatas.map((reply) => (
        <Card position="top-end" className="p-1 card" key={reply.id}>
          <Card.Header>
            <Row>
              <Col md={2}>
                <strong className="me-auto">{reply.username}</strong>
              </Col>
              <Col md={8}>
                <small className="text-muted">{reply.writeDate}</small>
              </Col>
              <Col md={2}>
                <div style={{ float: 'right' }}>
                  {sessionStorage.getItem('username') == reply.username ? (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      value={reply.id}
                      onClick={deleteReply}
                    >
                      삭제
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      size="sm"
                      value={reply.id}
                      onClick={openModal}
                    >
                      <img
                        src={imgA}
                        width="20"
                        height="20"
                        className="mb-1"
                        alt="신고"
                      />
                      신고
                    </Button>
                  )}
                  <Modal
                    open={modalOpen}
                    close={closeModal}
                    header="댓글 신고하기"
                  >
                    <Form onSubmit={reportReply}>
                      <Form.Select
                        onChange={(e) => {
                          setReplyId(replyId);
                          setReportContent(e.target.value);
                        }}
                      >
                        <option>========신고 내용을 선택하세요.========</option>
                        <option value={1}>욕설/차별 등 혐오 발언</option>
                        <option value={2}>광고성 댓글</option>
                        <option value={3}>반복적인 댓글</option>
                      </Form.Select>
                      <div>
                        <button type="submit" className="close">
                          확인
                        </button>
                        <button className="close" onClick={closeModal}>
                          취소
                        </button>
                      </div>
                    </Form>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {reply.report > 10 ? (
              <span className="blind">
                **********신고로 블라인드 처리된 댓글입니다.**********
              </span>
            ) : (
              reply.content
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Reply;
