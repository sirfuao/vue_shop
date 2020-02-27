<template>
    <div class="comment_info" v-if="Object.keys(commentInfo).length !==0 ">
        <div class="user">
            <img :src="commentInfo.user.avatar" />
            <div class="name">{{ commentInfo.user.uname }}</div>
        </div>
        <div class="comment">
            <p>{{ commentInfo.content }}</p>
            <div class="center">
                <span class="data">{{ commentInfo.created | showDate }}</span>
                <span>{{ commentInfo.style }}</span>
            </div>
            <div class="img">
                <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" />
            </div>
        </div>
    </div>
</template>
<script>
import {dateFormat} from '../../../common/utils.js'
export default {
    name: "DetailCommentInfo",
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    filters: {
        showDate(value) {
            // //1、将服务器返回过来的时间戳转化为Date对象
            let date = new Date(value*1000) //因为服务器返回的时间是秒，所以要乘以1000;
            //2、将date进行时间格式化
           return dateFormat("yyyy-MM-dd hh:mm", date)
        }
    }
};
</script>
<style lang="less" scoped>
.comment_info {
    margin-top: 0.4rem;
    border-top: 0.06rem solid #ececec;
    padding: 0 0.3rem;
    .user {
        display: flex;
        align-items: center;
        img {
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #f5f4f7;
            border-radius: 100%;
            margin: 0.3rem 0.3rem 0 0;
        }
        .name {
            font-size: 0.32rem;
            font-weight: bold;
        }
    }
    .comment {
        p {
            margin-top: 0.3rem;
            font-size: 0.3rem;
            line-height: 0.4rem;
        }
        .center {
            font-size: 0.28rem;
            color: gray;
            line-height: 0.64rem;
            .data {
                margin-right: 0.3rem;
            }
        }
        .img {
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
}
</style>