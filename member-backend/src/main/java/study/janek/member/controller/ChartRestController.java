package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.dto.BoardDto;
import study.janek.member.model.ChartData;
import study.janek.member.service.ChartService;

@CrossOrigin
@RestController
public class ChartRestController {
	
	@Autowired
	private ChartService chartService;
	
	@GetMapping("/chart/bestBoard")
	public List<BoardDto> bestBoard() {
		return chartService.getbestBoard();
	}

	@GetMapping("/chart/boardAndReply")
	public List<ChartData> boardAndReply() {
		return chartService.boardAndReply();
	}
	
	@GetMapping("/chart/memberJoin")
	public List<ChartData> memberJoin() {
		return chartService.memberJoin();
	}
	
}
