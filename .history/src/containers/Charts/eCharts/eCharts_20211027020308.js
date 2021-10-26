import React, { Component } from 'react';
import DynamicChartComponent from './DynamicChartComponent';
import * as configs from './configs';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';

import 'echarts-liquidfill';

import ReactEcharts from 'echarts-for-react';

export default class extends Component {
  clickBtn() {
    window.open(
      this.refs.echarts_react.getEchartsInstance().getDataURL(),
      '_blank'
    );
  }
  render() {
    const style = { height: '700px', width: '100%' };
    const className = 'react_for_echarts';
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>E Charts</PageHeader>

        <Box title="Dynamic Chart">
          <ContentHolder>
            <DynamicChartComponent />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.SimpleChart()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.ChartWithEventComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.ChartAPIComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.ChartWithEventComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.ThemeChartComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.MapChartComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>
        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.ChartShowLoadingComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.GraphComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.LunarCalendarComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.LiquidfillComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>

        <Box>
          <ContentHolder>
            <ReactEcharts
              option={configs.CalendarComponent()}
              style={style}
              className={className}
            />
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  }
}
