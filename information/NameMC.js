var request = new XMLHttpRequest();
request.open('GET', 'https://api.namemc.com/profile/04932fd4-d4e6-4aed-80a9-da4a0d64f93e/friends', true);
request.onload = function () {

    var data = JSON.parse(this.response);

    documemt.getElementById('name-mc').innerHTML += '<div class="point" data-aos="fade-up" data-aos-duration="1000">-<span style="color:silver;"> NameMC 친구 리스트 </span>-</div><br>';

    data.forEach((friend) => {

        document.getElementById('name-mc').innerHTML += '<div class="point" data-aos="fade-up" data-aos-duration="1000">' + friend.name + '</div>';

    })

}
request.send();
