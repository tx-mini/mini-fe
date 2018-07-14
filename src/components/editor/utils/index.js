import { getNoteContent } from "../../../api/save";
//测试获取该页重点笔记
// 传入笔记的raw，返回该页的重点笔记raw
export const filterImportantnce = raw => {
  const content = raw;

  const tc = JSON.parse(JSON.stringify(content));
  // 获取含有important的区间
  // todo 把那一段的样式也保留下。。有点麻烦好像
  const importantSum = [];
  tc.blocks.forEach(block => {
    const temp = [];
    block.inlineStyleRanges.forEach(inlineStyle => {
      // 一个区块的重点笔记在一个div里面

      if (inlineStyle.style === "COLOR-C0392B") {
        temp.push(
          `${block.text.substr(inlineStyle.offset, inlineStyle.length)}  `
        );
      }
    });
    importantSum.push(temp.join(" "));
  });
  return importantSum; // 是一个数组，每一项是一段
};
// todo 生成每一个block
export const filterSomeImportantnce = async ids => {
  const p = await Promise.all(ids.map(id => getNoteContent(id)));
  const finalKeyNote = p.reduce((pre, item) => {
    pre.push(...filterImportantnce(JSON.parse(item.content)));
    return pre;
  }, []);
  let contentObj = {
    entityMap: {},
    blocks: finalKeyNote.map(item => {
      return {
        // block
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        type: "unstyled",
        key: Math.random()
          .toString(36)
          .slice(2, 7),
        text: item
      };
    })
  };
  return contentObj;
};
