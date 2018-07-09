import React from 'react'
import './firstSlide.less'

class FirstSlide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classDir: props.classDir,
            brushList: props.brushList,
            showClass: true,
            showCChild: [],
            showBChild: [],
            curCParentIndex: 0,
            curCIndex: 0,
            curBParentIndex: "",
            curBIndex: "",
            showDrush: false
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            classDir: nextProps.classDir,
            brushList: nextProps.brushList
        })
    }
    componentDidMount() {
        const {classDir, brushList} = this.state;
        let initC = [];
        let initB = [];
        for(let i = 0; i < classDir.length; i++){
            initC.push(true)
        }
        for(let i = 0; i < brushList.length; i++){
            initB.push(false)
        }
        this.setState({
            showCChild: initC,
            showBChild: initB
        })
    }
    toggleShow(index, type) {
        const {showCChild, showBChild} = this.state;
        let arr;
        if(type === "class"){
            arr = showCChild
            arr[index] = !showCChild[index];
            this.setState({
                showCChild: arr
            })
        }
        else{
            arr = showBChild
            arr[index] = !showBChild[index];
            this.setState({
                showBChild: arr
            })
        }
    }
    selectItem(i, index, data, type){
        let curCIndex;
        let curCParentIndex;
        let curBIndex;
        let curBParentIndex;
        if(type === "class"){
            curCIndex = i;
            curCParentIndex = index;
            curBIndex = "";
            curBParentIndex = "";
        }
        else{
            curCIndex = "";
            curCParentIndex = "";
            curBIndex = i;
            curBParentIndex = index;
        }
        this.setState({
            curCIndex: curCIndex,
            curCParentIndex: curCParentIndex,
            curBIndex: curBIndex,
            curBParentIndex: curBParentIndex
        })
        //传递选中的data
        this.props.SelectItem(data);
    }
    createNote(){
        //新建笔记
        this.props.createNote();
    }
    render(){
        const {classDir, brushList, showClass, showCChild, showBChild, curCIndex, curCParentIndex, showDrush, curBIndex, curBParentIndex} = this.state;
        return(
            <div className="first-slide">
                <div className="new-note" onClick={this.createNote.bind(this)}>
                    <i className="iconfont icon-add add-icon"></i>
                    新建笔记
                </div>
                <div className="slide-content">
                    <div className="class-note">
                        <div className="slide-item" onClick={() => this.setState({showClass: !showClass})}>
                            <i className={["iconfont show-icon", showClass? "icon-shouqi": "icon-zhankai"].join(" ")} ></i>
                            <i className="iconfont icon-iconset0117 show-icon item-icon"></i>
                            <span className="item-title">课堂笔记</span>
                        </div>
                        {
                            classDir.map((item, index) => (
                                <div className={showClass? "show": "hide"} key={index}>
                                    <div className="slide-item sub-item" onClick={this.toggleShow.bind(this, index, "class")}>
                                        <i className={["iconfont show-icon", showCChild[index]? "icon-shouqi": "icon-zhankai"].join(" ")} ></i>
                                        <i className="iconfont icon-wenjianjia show-icon item-icon"></i>
                                        <span className="item-title">{item.value}</span>
                                    </div>
                                    {
                                        item.childrens.map((data, i) => (
                                            <div className={["slide-item final-item", showCChild[index]? "show": "hide"].join(" ")} onClick={this.selectItem.bind(this, i, index, data, "class")} key={i}>
                                                <i className="iconfont icon-wenben show-icon item-icon"></i>
                                                <span className={["item-title", curCIndex === i && curCParentIndex === index? "active" : ""].join(" ")}>{data.value}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="slide-content">
                    <div className="class-note">
                        <div className="slide-item" onClick={() => this.setState({showDrush: !showDrush})}>
                            <i className={["iconfont show-icon", showDrush? "icon-shouqi": "icon-zhankai"].join(" ")} ></i>
                            <i className="iconfont icon-shanchu show-icon item-icon"></i>
                            <span className="item-title">回收站</span>
                        </div>
                        {
                            brushList.map((item, index) => (
                                <div className={showDrush? "show": "hide"} key={index}>
                                    
                                    { item.childrens.length === 0? 
                                        <div className="slide-item sub-item" onClick={this.selectItem.bind(this, "", index, item, "brush")}>
                                            <i className="iconfont icon-wenben show-icon item-icon"></i>
                                            <span className={["item-title", curBParentIndex === index? "active" : ""].join(" ")}>{item.value}</span>
                                        </div>
                                        :
                                        <div>
                                            <div className="slide-item sub-item" onClick={this.toggleShow.bind(this, index, "brush")}>
                                                <i className={["iconfont show-icon", showBChild[index]? "icon-shouqi": "icon-zhankai"].join(" ")} ></i>
                                                <i className="iconfont icon-wenjianjia show-icon item-icon"></i>
                                                <span className="item-title">{item.value}</span>
                                            </div>
                                            {
                                                item.childrens.map((data, i) => (
                                                    <div className={["slide-item final-item", showBChild[index]? "show": "hide"].join(" ")} onClick={this.selectItem.bind(this, i, index, data, "brush")} key={i}>
                                                        <i className="iconfont icon-wenben show-icon item-icon"></i>
                                                        <span className={["item-title", curBIndex === i && curBParentIndex === index? "active" : ""].join(" ")}>{data.value}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        
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