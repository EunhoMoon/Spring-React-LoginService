package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	public List<Board> getBoardAll(@RequestParam String keyword) {
		return boardService.getBoardAll(keyword);
	}

	@GetMapping("/board/list/{pageNum}")
	public List<BoardDto> getBoardList(@PathVariable("pageNum") int pageNum, @RequestParam String keyword) {
		return boardService.getBoardList(pageNum, keyword);
	}
	
	@CrossOrigin
	@GetMapping("/board/post/{userId}")
	public List<Board> getPostList(@PathVariable("userId") Long userId) {
		return boardService.getPostList(userId);
	}

	@GetMapping("/board/detail/{id}")
	public BoardDto getBoardById(@PathVariable("id") Long id) {
		return boardService.getBoardById(id);
	}

	@DeleteMapping("/board/delete/{id}")
	public int deleteBoardById(@PathVariable("id") Long id) {
		int result = 0;
		result = boardService.deleteBoardById(id);

		return result;
	}

	@PutMapping("/board/update/{id}")
	public int updateBoard(@PathVariable("id") Long id, @RequestBody Board board) throws Exception {
		int result = 0;

		result = boardService.updateBoard(id, board);

		return result;
	}

}
