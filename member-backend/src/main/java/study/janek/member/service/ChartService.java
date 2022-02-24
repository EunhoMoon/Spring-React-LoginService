package study.janek.member.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.janek.member.mapper.ChartMapper;
import study.janek.member.model.ChartData;

@Service
public class ChartService {

	@Autowired
	private ChartMapper chartMapper;

	public ChartService(ChartMapper chartMapper) {
		this.chartMapper = chartMapper;
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

}
