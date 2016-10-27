<template>
    <div class="detail">
        <div class="detail-header">
            <ul>
                <li>
                    <router-link :to="{path:'/index/search'}">&lt</router-link</li>
                        <li>专辑</li>
                        <li>发现</li>
            </ul>
        </div>

        <div class="detail-content">
            <div class="title">
                <div class="title-txt">
                    <h2>{{detail.name}}</h2>
                    <span>笔记:{{detail.total}}</span>
                    <span>粉丝:{{detail.fans}}</span>
                </div>
                <div class="like">
                    <p>+关注</p>
                </div>
            </div>

            <div class="desc">
                <img v-bind:src="userinfo.images" alt="">
                <p><span>{{userinfo.nickname}}</span>:{{detail.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    detail: '',
                    userinfo: ''
                }
            },
            mounted: function() {
                this.$nextTick(function() {
                    // 保证 this.$el 已经插入文档
                    //console.log(this.$route.params.id)
                    this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json')
                        .then(
                            (res) => {
                                //console.log(res.data.data);
                                for (var i = 0; i < res.data.data.length; i++) {
                                    let routeId = this.$route.params.id;
                                    let goodId = res.data.data[i].id;
                                    if (routeId == goodId) {
                                        //  console.log(res.data.data[i])
                                        this.detail = res.data.data[i];
                                        this.userinfo = res.data.data[i].user;
                                    }
                                }

                            },
                            (error) => {
                                //console.log(error)
                            }
                        )
                })
            }

    }
</script>
