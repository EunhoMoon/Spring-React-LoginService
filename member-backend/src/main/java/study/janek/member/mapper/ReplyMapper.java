package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.dto.ReplyDto;
import study.janek.member.model.Reply;

@Mapper
public interface ReplyMapper {

	int insertReply(Reply reply);
	
	List<ReplyDto> getReply(Long boardId);
	
}
