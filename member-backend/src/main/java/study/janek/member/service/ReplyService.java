package study.janek.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import study.janek.member.dto.ReplyDto;
import study.janek.member.mapper.ReplyMapper;
import study.janek.member.model.Reply;
import study.janek.member.model.Report;

@Service
public class ReplyService {

	@Autowired
	ReplyMapper replyMapper;
	
	public ReplyService(ReplyMapper replyMapper) {
		this.replyMapper = replyMapper;
	}
	
	public int insertReply(Reply reply) {
		return replyMapper.insertReply(reply);
	}
	
	public List<ReplyDto> getReply(Long boardId) {
		List<ReplyDto> dtoList = replyMapper.getReply(boardId);
		for (ReplyDto replyDto : dtoList) {
			replyDto.setWriteDate(replyDto.getWriteDate().substring(0, 19));
		}
		// 클라이언트에서 보기편하고, 프론트의 부담을 줄이기 위해 서버에서 작업
		
		return dtoList;
	}
	
	public int deleteReply(Long replyId) {
		return replyMapper.deleteReply(replyId);
	}
	
	@Transactional
	public int reportReply(Long replyId, Report report) {
		int result = 0;
		
		result = replyMapper.getReportByUser(report);
		
		if (result == 1) {
			result = 2;
			return result;
		} else {
			result = replyMapper.reportReplyByUser(report) == 1 ? replyMapper.reportReply(replyId) : 0;
		}
		
		return replyMapper.reportReply(replyId);
	}
	
}
