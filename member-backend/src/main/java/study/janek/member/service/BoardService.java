package study.janek.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.janek.member.dto.BoardDto;
import study.janek.member.mapper.BoardMapper;
import study.janek.member.model.Board;

@Service
public class BoardService {

	@Autowired
	private BoardMapper boardMapper;
	
	public BoardService(BoardMapper boardMapper) {
		this.boardMapper = boardMapper;
	}
	
	public int insertBoard(Board board) {
		int result = 0;
		result = boardMapper.insertBoard(board);

		return result;
	}
	
	public List<Board> getBoardAll() {
		return boardMapper.getBoardAll();
	}
	
	public List<BoardDto> getBoardList(int pageNum) {
		pageNum = (pageNum - 1) * 10;
		return boardMapper.getBoardList(pageNum);
	}
	
	public BoardDto getBoardById(Long id) {
		return boardMapper.getBoardById(id);
	}
}
