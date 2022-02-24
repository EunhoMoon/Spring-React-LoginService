package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.janek.member.model.ChartData;

@Mapper
public interface ChartMapper {

	ChartData boardAndReply(String date);
}
