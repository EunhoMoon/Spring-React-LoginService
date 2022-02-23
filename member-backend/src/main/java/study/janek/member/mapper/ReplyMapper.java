package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.dto.ReplyDto;
import study.janek.member.model.Reply;
import study.janek.member.model.Report;

@Mapper
public interface ReplyMapper {

	int insertReply(Reply reply);
	
	List<ReplyDto> getReply(Long boardId);
	
	int deleteReply(Long replyId);
	
	int reportReply(Long replyId);
	
	int getReportByUser(Report report);
	
	int reportReplyByUser(Report report);
	
}
