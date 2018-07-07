import React from 'react'
import './firstSlide.css'

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
            startDir: [
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
            showStar: false,
            showCChild: [],
            showSChild: []
        }
    }
    componentDidMount() {
        const {classDir, startDir} = this.state;
        let initC = [];
        let initS = [];
        for(let i = 0; i < classDir.length; i++){
            initC.push(true)
        }
        for(let i = 0; i < startDir.length; i++){
            initS.push(false)
        }
        this.setState({
            showCChild: initC,
            showSChild: initS
        })
    }
    toggleShow(index, type) {
        console.log(index);
        const {showCChild, showSChild} = this.state;
        let arr = [];
        if(type === "class"){
            arr = showCChild;
            arr[index] = !showCChild[index];
            this.setState({
                showCChild: arr
            })
        }
        else{
            arr = showSChild;
            arr[index] = !showSChild[index];
            this.setState({
                showSChild: arr
            })
        }

    }
    render(){
        const {classDir, startDir, showClass, showStar, showCChild, showSChild} = this.state;
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
                                        <i className={["iconfont show-icon", showCChild[index]? "icon-shouqi": "icon-zhankai"].join(" ")} onClick={this.toggleShow.bind(this, index, "class")}></i>
                                        <i className="iconfont icon-wenjianjia show-icon item-icon"></i>
                                        <span className="item-title">{item.value}</span>
                                    </div>
                                    {
                                        item.childrens.map((data, i) => (
                                            <div className={["slide-item final-item", showCChild[index]? "show": "hide"].join(" ")} key={i}>
                                                <i className="iconfont icon-wenben show-icon item-icon"></i>
                                                <span className="item-title">{data.value}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="class-note">
                        <div className="slide-item">
                            <i className={["iconfont show-icon", showStar? "icon-shouqi": "icon-zhankai"].join(" ")} onClick={() => this.setState({showStar: !showStar})}></i>
                            <i className="iconfont icon-star show-icon item-icon"></i>
                            <span className="item-title">重点笔记</span>
                        </div>
                        {
                            startDir.map((item, index) => (
                                <div className={showStar? "show": "hide"} key={index}>
                                    <div className="slide-item sub-item">
                                        <i className={["iconfont show-icon", showSChild[index]? "icon-shouqi": "icon-zhankai"].join(" ")} onClick={this.toggleShow.bind(this, index, "star")}></i>
                                        <i className="iconfont icon-wenjianjia show-icon item-icon"></i>
                                        <span className="item-title">{item.value}</span>
                                    </div>
                                    {
                                        item.childrens.map((data, i) => (
                                            <div className={["slide-item final-item", showSChild[index]? "show": "hide"].join(" ")} key={i}>
                                                <i className="iconfont icon-wenben show-icon item-icon"></i>
                                                <span className="item-title">{data.value}</span>
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