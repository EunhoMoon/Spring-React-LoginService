package study.janek.member.model;

import java.sql.Timestamp;

public class Reply {

	private Long id;
	private Long writer;
	private Long board;
	private String content;
	private Timestamp writeDate;
	private int report;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getWriter() {
		return writer;
	}

	public void setWriter(Long writer) {
		this.writer = writer;
	}

	public Long getBoard() {
		return board;
	}

	public void setBoard(Long board) {
		this.board = board;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Timestamp getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(Timestamp writeDate) {
		this.writeDate = writeDate;
	}

	public int getReport() {
		return report;
	}

	public void setReport(int report) {
		this.report = report;
	}

	@Override
	public String toString() {
		return "Reply [id=" + id + ", writer=" + writer + ", board=" + board + ", content=" + content + ", writeDate="
				+ writeDate + ", report=" + report + "]";
	}
	
}
