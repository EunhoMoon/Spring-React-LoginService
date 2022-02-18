package study.janek.member.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
	
	public List<Board> getBoardAll(String keyword) {
		return boardMapper.getBoardAll(keyword);
	}
	
	public List<BoardDto> getBoardList(int pageNum, String keyword) {
		int startNum = (pageNum - 1) * 10;
		List<BoardDto> boardList = boardMapper.getBoardList(startNum, keyword);
		List<Board> totalList = boardMapper.getBoardAll(keyword);
		String today = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		int no = (totalList.size() - 10 * (pageNum - 1));
		for (BoardDto boardDto : boardList) {
			
			if (boardDto.getTitle().length() > 12) {
				boardDto.setTitle(boardDto.getTitle().substring(0, 12) + "...");
			}
			if (boardDto.getWriteDate().substring(0, 10).equals(today)) {
				boardDto.setIsNew(true);
			}
			boardDto.setNo(no);
			no--;
		}
		
		return boardList;
	}
	
	public List<Board> getPostList(Long userId) {
		return boardMapper.getPostList(userId);
	}
	
	public BoardDto getBoardById(Long id) {
		BoardDto boardDto = boardMapper.getBoardById(id);
		
		if (boardDto != null) {
			boardMapper.updateReadCnt(boardDto.getId());
			boardDto.setReadCnt(boardDto.getReadCnt() + 1);
		}
		
		return boardDto;
	}
	
	public int deleteBoardById(Long id) {
		int result = 0;
		result = boardMapper.deleteBoardById(id);
		
		return result;
	}
	
	public int updateBoard(Long id, Board board) {
		int result = 0;
		board.setId(id);
		result = boardMapper.updateBoard(board);

		return result;
	}
}
