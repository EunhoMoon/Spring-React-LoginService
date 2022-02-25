package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.dto.BoardDto;
import study.janek.member.model.ChartData;

@Mapper
public interface ChartMapper {

	List<BoardDto> getbestBoard();

	List<BoardDto> getbestReply();
	
	ChartData boardAndReply(String date);
	
	ChartData memberJoin(String date, String pastdate);
	
}
