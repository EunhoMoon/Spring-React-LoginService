package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.dto.BoardDto;
import study.janek.member.model.Board;

@Mapper
public interface BoardMapper {
	
	int insertBoard(Board board);
	
	List<Board> getBoardAll();
	
	List<BoardDto> getBoardList(int pageNum);
	
	BoardDto getBoardById(Long id);
	
}
