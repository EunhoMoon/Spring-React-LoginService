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
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.dto.ReplyDto;
import study.janek.member.model.Reply;
import study.janek.member.model.Report;
import study.janek.member.service.ReplyService;

@CrossOrigin("*")
@RestController
public class ReplyRestController {

	@Autowired
	ReplyService replyService;
	
	@PostMapping("/reply/insert")
	public int insertReply(@RequestBody Reply reply) {
		return replyService.insertReply(reply);
	}
	
	@GetMapping("/reply/{boardId}")
	public List<ReplyDto> getReply(@PathVariable("boardId") Long boardId) {
		return replyService.getReply(boardId);
	}
	
	@DeleteMapping("/reply/delete/{replyId}")
	public int deleteReply(@PathVariable("replyId") Long replyId) {
		return replyService.deleteReply(replyId);
	}
	
	@PutMapping("/reply/report/{replyId}")
	public int reportReply(@PathVariable("replyId") Long replyId, @RequestBody Report report) {
		int result = 0;
		
		result =replyService.reportReply(replyId, report);
		
		return result;
	}
	
}
