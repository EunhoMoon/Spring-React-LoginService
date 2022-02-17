package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.dto.BoardDto;
import study.janek.member.model.Board;
import study.janek.member.model.User;
import study.janek.member.service.BoardService;

@CrossOrigin("*")
@RestController
public class BoardRestController {
	
	@Autowired
	BoardService boardService;

	@PostMapping("/board/write")
	public int insertBoard(@RequestBody Board board) throws Exception {
		int result = 0;
		
		result = boardService.insertBoard(board);
		
		return result;
	}
	
	@GetMapping("/board/all")
	public List<Board> getBoardAll() {
		return boardService.getBoardAll();
	}

	@GetMapping("/board/list/{pageNum}")
	public List<BoardDto> getBoardList(@PathVariable("pageNum") int pageNum) {
		return boardService.getBoardList(pageNum);
	}
	
	@GetMapping("/board/detail/{id}")
	public BoardDto getBoardById(@PathVariable("id") Long id) {
		return boardService.getBoardById(id);
	}
	
}
