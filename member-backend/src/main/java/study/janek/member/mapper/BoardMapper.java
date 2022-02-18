package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.dto.BoardDto;
import study.janek.member.model.Board;

@Mapper
public interface BoardMapper {
	
	int insertBoard(Board board);
	
	List<Board> getBoardAll(String keyword);
	
	List<BoardDto> getBoardList(int pageNum, String keyword);
	
	List<Board> getPostList(Long userId);
	
	BoardDto getBoardById(Long id);
	
	int deleteBoardById(Long id);
	
	int updateBoard(Board board);
	
	int updateReadCnt(Long id);
	
}
