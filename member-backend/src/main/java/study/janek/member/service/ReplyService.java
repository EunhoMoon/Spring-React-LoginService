package study.janek.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.janek.member.dto.ReplyDto;
import study.janek.member.mapper.ReplyMapper;
import study.janek.member.model.Reply;

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
	
}
