import React from 'react'
import './firstSlide.less'

class FirstSlide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classDir: [
                {
                    id: "shdjd",
                    value: "大三第一学期",
                    childrens: [
                        {
                            id: "sjdkd",
                            value: "计算机网络"
                        }
                    ]
                },
                {
                    id: "kkaaa",
                    value: "大三第二学期",
                    childrens: [
                        {
                            id: "sjdkd",
                            value: "操作系统"
                        },
                        {
                            id: "ss",
                            value: "概率论"
                        }
                    ]
                }
            ],
            showClass: true,
            showCChild: [],
            curParentIndex: 0,
            curIndex: 0
        }
    }
    componentDidMount() {
        const {classDir} = this.state;
        let initC = [];
        for(let i = 0; i < classDir.length; i++){
            initC.push(true)
        }
        this.setState({
            showCChild: initC
        })
    }
    toggleShow(index) {
        const {showCChild} = this.state;
        let arr = showCChild;
        arr[index] = !showCChild[index];
        this.setState({
            showCChild: arr
        })
    }
    selectItem(i, index){
        this.setState({
            curIndex: i,
            curParentIndex: index
        })
    }
    render(){
        const {classDir, showClass, showCChild, curIndex, curParentIndex} = this.state;
        return(
            <div className="first-slide">
                <div className="new-note">
                    <i className="iconfont icon-add add-icon"></i>
                    新建笔记
                </div>
                <div className="slide-content">
                    <div className="class-note">
                        <div className="slide-item">
                            <i className={["iconfont show-icon", showClass? "icon-shouqi": "icon-zhankai"].join(" ")} onClick={() => this.setState({showClass: !showClass})}></i>
                            <i className="iconfont icon-iconset0117 show-icon item-icon"></i>
                            <span className="item-title">课堂笔记</span>
                        </div>
                        {
                            classDir.map((item, index) => (
                                <div className={showClass? "show": "hide"} key={index}>
                                    <div className="slide-item sub-item">
                                        <i className={["iconfont show-icon", showCChild[index]? "icon-shouqi": "icon-zhankai"].join(" ")} onClick={this.toggleShow.bind(this, index)}></i>
                                        <i className="iconfont icon-wenjianjia show-icon item-icon"></i>
                                        <span className="item-title">{item.value}</span>
                                    </div>
                                    {
                                        item.childrens.map((data, i) => (
                                            <div className={["slide-item final-item", showCChild[index]? "show": "hide"].join(" ")} onClick={this.selectItem.bind(this, i, index)} key={i}>
                                                <i className="iconfont icon-wenben show-icon item-icon"></i>
                                                <span className={["item-title", curIndex === i && curParentIndex === index? "active" : ""].join(" ")}>{data.value}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstSlide;