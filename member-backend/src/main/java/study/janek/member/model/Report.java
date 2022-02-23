package study.janek.member.model;

public class Report {

	private Long id;
	private Long replyId;
	private int reportContent;
	private Long reporter;
	private String reportDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getReplyId() {
		return replyId;
	}

	public void setReplyId(Long replyId) {
		this.replyId = replyId;
	}

	public int getReportContent() {
		return reportContent;
	}

	public void setReportContent(int reportContent) {
		this.reportContent = reportContent;
	}

	public Long getReporter() {
		return reporter;
	}

	public void setReporter(Long reporter) {
		this.reporter = reporter;
	}

	public String getReportDate() {
		return reportDate;
	}

	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}

}
