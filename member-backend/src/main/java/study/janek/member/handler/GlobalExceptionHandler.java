package study.janek.member.handler;

import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;



@ControllerAdvice
@RestController
public class GlobalExceptionHandler {
// 예외 처리를 위한 class	
	
	private Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	@ExceptionHandler(value = Exception.class)
	public String handleException(Exception e) {
		logger.debug("Exception Handler 호출");
		return e.getMessage();
	}
}
