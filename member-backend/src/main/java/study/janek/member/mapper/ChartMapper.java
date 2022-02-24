package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.model.ChartData;

@Mapper
public interface ChartMapper {

	int boardCount(String date);

	int replyCount(String date);
}
