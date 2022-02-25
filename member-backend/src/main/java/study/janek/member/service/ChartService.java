package study.janek.member.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.janek.member.dto.BoardDto;
import study.janek.member.mapper.ChartMapper;
import study.janek.member.model.Board;
import study.janek.member.model.ChartData;

@Service
public class ChartService {

	@Autowired
	private ChartMapper chartMapper;

	public ChartService(ChartMapper chartMapper) {
		this.chartMapper = chartMapper;
	}
	
	public List<BoardDto> getbestBoard() {
		List<BoardDto> boardList = chartMapper.getbestBoard();
		int no = 1;
		for (BoardDto boardDto : boardList) {
			
			if (boardDto.getTitle().length() > 12) {
				boardDto.setTitle(boardDto.getTitle().substring(0, 12) + "...");
			}
			
			if (boardDto.getContent().length() > 50) {
				boardDto.setTitle(boardDto.getTitle().substring(0, 48) + "...");
			}
			
			boardDto.setNo(no);
			no++;
		}
		
		return boardList;
	}
	
	public List<BoardDto> getbestReply() {
		List<BoardDto> boardList = chartMapper.getbestReply();
		int no = 1;
		for (BoardDto boardDto : boardList) {
			
			if (boardDto.getTitle().length() > 12) {
				boardDto.setTitle(boardDto.getTitle().substring(0, 12) + "...");
			}
			
			if (boardDto.getContent().length() > 50) {
				boardDto.setTitle(boardDto.getTitle().substring(0, 48) + "...");
			}
			
			boardDto.setNo(no);
			no++;
		}
		
		return boardList;
	}

	public List<ChartData> boardAndReply() {
		List<ChartData> chartDataList = new ArrayList<ChartData>();
		LocalDate now = LocalDate.now();

		for (int i = 6, j = 0 ; i >= 0 ; i--, j++) {
			ChartData chartData = new ChartData();
			String date = now.minusDays(i).toString();
			
			chartData = chartMapper.boardAndReply(date);
			chartData.setName(now.minusDays(i).getDayOfMonth() + "일");
			
			chartDataList.add(chartData);
		}

		return chartDataList;
	}
	
	public List<ChartData> memberJoin() {
		List<ChartData> chartDataList = new ArrayList<ChartData>();
		LocalDate now = LocalDate.now();

		for (int i = 6, j = 0 ; i >= 0 ; i--, j++) {
			ChartData chartData = new ChartData();
			String date = now.minusDays(i).toString();
			String pastdate = now.minusDays(i + 7).toString();
			
			chartData = chartMapper.memberJoin(date, pastdate);
			chartData.setName(now.minusDays(i).getDayOfMonth() + "일");
			
			chartDataList.add(chartData);
		}

		return chartDataList;
	}
	
	public ChartData getMemberCount() {
		ChartData chartData = chartMapper.getMemberCount();
		chartData.setName("Member Count");
		return chartData;
	}

}
