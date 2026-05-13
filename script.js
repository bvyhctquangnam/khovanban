// Hàm chuyển đổi ngày DD/MM/YYYY thành timestamp
    function toTimestamp(dateStr) {
        if (!dateStr) return 0;
        var parts = dateStr.split('/');
        if (parts.length === 3) {
            return new Date(parts[2], parts[1]-1, parts[0]).getTime();
        }
        return 0;
    }

    // Hàm sắp xếp mảng theo ngày giảm dần (mới nhất lên đầu)
    function sortByDateDesc(arr) {
        return arr.slice().sort(function(a, b) {
            return toTimestamp(b.ngayBanHanh) - toTimestamp(a.ngayBanHanh);
        });
    }

    // ======================== DỮ LIỆU ========================
    var thuTucHanhChinhData = sortByDateDesc([
        { name: "Quy trình công khai minh bạch bệnh viện", soKyHieu: "111/QĐ-BVYHCT", ngayBanHanh: "20/06/2025", link: "#" },
        { name: "Quy chế chi tiêu nội bộ năm 2025", soKyHieu: "110/QĐ-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Nội quy lao động bệnh viện", soKyHieu: "112/QĐ-BVYHCT", ngayBanHanh: "01/06/2025", link: "#" },
        { name: "Sơ đồ tổ chức bệnh viện", soKyHieu: "03/QĐ-BVYHCT", ngayBanHanh: "10/01/2025", link: "#" },
        { name: "Kế hoạch phát triển bệnh viện hạng III 2025-2030", soKyHieu: "01/KH-BVYHCT", ngayBanHanh: "05/01/2025", link: "#" },
        { name: "Thông tin giờ làm việc các khoa phòng", soKyHieu: "02/TB-BVYHCT", ngayBanHanh: "01/01/2025", link: "#" },
        { name: "Giấy phép hoạt động bệnh viện", soKyHieu: "01/GP-BVYHCT", ngayBanHanh: "01/01/2025", link: "#" }
    ]);

    var khamChuaBenhData = sortByDateDesc([
        { name: "Báo cáo sơ kết công tác khám chữa bệnh 6 tháng đầu năm 2025", soKyHieu: "SK6/BC-BVYHCT", ngayBanHanh: "15/07/2025", link: "#" },
        { name: "Báo cáo thống kê khám chữa bệnh quý II/2025", soKyHieu: "Q2/BC-BVYHCT", ngayBanHanh: "10/07/2025", link: "#" },
        { name: "Quy trình thực hiện kỹ thuật cấy chỉ", soKyHieu: "127/QĐ-BVYHCT", ngayBanHanh: "20/06/2025", link: "#" },
        { name: "Quy trình thực hiện kỹ thuật ngâm thuốc YHCT", soKyHieu: "128/QĐ-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Hướng dẫn chẩn đoán điều trị bệnh bằng YHCT", soKyHieu: "126/QĐ-BVYHCT", ngayBanHanh: "10/06/2025", link: "#" },
        { name: "Báo cáo thống kê khám chữa bệnh tháng 05/2025", soKyHieu: "05/BC-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" },
        { name: "Quy trình cấp cứu ngừng tuần hoàn", soKyHieu: "122/QĐ-BVYHCT", ngayBanHanh: "15/05/2025", link: "#" },
        { name: "Quy trình điện châm - thủy châm an toàn", soKyHieu: "120/QĐ-BVYHCT", ngayBanHanh: "01/05/2025", link: "#" },
        { name: "Chấn chỉnh việc ghi hồ sơ bệnh án và kê đơn thuốc", soKyHieu: "161/CV-BVYHCT", ngayBanHanh: "05/04/2025", link: "#" },
        { name: "Công văn chấn chỉnh công tác khám chữa bệnh ngoại trú", soKyHieu: "160/CV-BVYHCT", ngayBanHanh: "01/04/2025", link: "#" },
        { name: "Quy trình hội chẩn liên khoa", soKyHieu: "115/QĐ-BVYHCT", ngayBanHanh: "10/03/2025", link: "#" },
        { name: "Công văn hướng dẫn thực hiện dịch vụ xoa bóp bấm huyệt", soKyHieu: "151/CV-BVYHCT", ngayBanHanh: "10/03/2025", link: "#" },
        { name: "Công văn hướng dẫn thực hiện dịch vụ kỹ thuật hào châm", soKyHieu: "150/CV-BVYHCT", ngayBanHanh: "05/03/2025", link: "#" },
        { name: "Quy trình khám bệnh ngoại trú BHYT", soKyHieu: "112/QĐ-BVYHCT", ngayBanHanh: "15/02/2025", link: "#" },
        { name: "Báo cáo tổng kết công tác khám chữa bệnh năm 2024", soKyHieu: "TK/BC-BVYHCT", ngayBanHanh: "15/01/2025", link: "#" }
    ]);

    var dieuDuongData = sortByDateDesc([
        { name: "Quy trình chăm sóc bệnh nhân nặng", soKyHieu: "71/QĐ-BVYHCT", ngayBanHanh: "22/06/2025", link: "#" },
        { name: "Quy trình phòng ngừa té ngã cho người bệnh", soKyHieu: "70/QĐ-BVYHCT", ngayBanHanh: "20/06/2025", link: "#" },
        { name: "Kế hoạch giám sát nhiễm khuẩn bệnh viện", soKyHieu: "62/KH-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Quy trình khử khuẩn dụng cụ YHCT", soKyHieu: "61/QĐ-BVYHCT", ngayBanHanh: "10/06/2025", link: "#" },
        { name: "Quy trình vệ sinh tay và sát khuẩn nhanh", soKyHieu: "60/QĐ-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" }
    ]);

    var bhytData = sortByDateDesc([
        { name: "Quy trình tiếp nhận thanh toán BHYT ngoại trú", soKyHieu: "130/QĐ-BVYHCT", ngayBanHanh: "25/06/2025", link: "#" },
        { name: "Cảnh báo từ BHXH về thanh toán trùng lặp", soKyHieu: "204/TB-BVYHCT", ngayBanHanh: "20/06/2025", link: "#" },
        { name: "Thông báo giám định BHYT quý II/2025", soKyHieu: "122/TB-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" },
        { name: "Phụ lục hợp đồng BHYT - bổ sung thuốc YHCT", soKyHieu: "PL02/HD-BVYHCT", ngayBanHanh: "15/05/2025", link: "#" },
        { name: "Hợp đồng khám chữa bệnh BHYT năm 2025", soKyHieu: "01/HD-BVYHCT", ngayBanHanh: "10/01/2025", link: "#" }
    ]);

    var qlclData = sortByDateDesc([
        { name: "Quy trình xử lý sự cố y khoa", soKyHieu: "50/QĐ-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Mạng lưới Quản lý chất lượng bệnh viện", soKyHieu: "47/QĐ-BVYHCT", ngayBanHanh: "20/05/2025", link: "#" },
        { name: "Quy chế hoạt động Tổ Quản lý chất lượng", soKyHieu: "46/QĐ-BVYHCT", ngayBanHanh: "15/05/2025", link: "#" },
        { name: "Quyết định kiện toàn Hội đồng Quản lý chất lượng", soKyHieu: "45/QĐ-BVYHCT", ngayBanHanh: "10/05/2025", link: "#" },
        { name: "Danh sách thành viên Hội đồng Thuốc và Điều trị", soKyHieu: "57/QĐ-BVYHCT", ngayBanHanh: "30/04/2025", link: "#" },
        { name: "Danh sách thành viên Hội đồng Khoa học kỹ thuật", soKyHieu: "56/QĐ-BVYHCT", ngayBanHanh: "25/04/2025", link: "#" },
        { name: "Quyết định thành lập Hội đồng Chỉ đạo tuyến", soKyHieu: "53/QĐ-BVYHCT", ngayBanHanh: "10/04/2025", link: "#" },
        { name: "Quy chế hoạt động Hội đồng Thuốc và Điều trị", soKyHieu: "52/QĐ-BVYHCT", ngayBanHanh: "05/04/2025", link: "#" },
        { name: "Quyết định thành lập Hội đồng Thuốc và Điều trị", soKyHieu: "51/QĐ-BVYHCT", ngayBanHanh: "01/04/2025", link: "#" },
        { name: "Quy chế hoạt động Hội đồng Khoa học kỹ thuật", soKyHieu: "49/QĐ-BVYHCT", ngayBanHanh: "25/03/2025", link: "#" },
        { name: "Quyết định thành lập Hội đồng Khoa học kỹ thuật", soKyHieu: "48/QĐ-BVYHCT", ngayBanHanh: "20/03/2025", link: "#" }
    ]);

    var chuyenDoiSoData = sortByDateDesc([
        { name: "Kế hoạch ứng dụng AI trong hỗ trợ chẩn đoán YHCT", soKyHieu: "06/KH-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Hướng dẫn thanh toán viện phí không dùng tiền mặt", soKyHieu: "04/HD-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" },
        { name: "Quy định quản lý hồ sơ sức khỏe điện tử", soKyHieu: "02/CDS-BVYHCT", ngayBanHanh: "25/05/2025", link: "#" },
        { name: "Chiến lược chuyển đổi số bệnh viện 2025-2030", soKyHieu: "01/CDS-BVYHCT", ngayBanHanh: "20/05/2025", link: "#" }
    ]);

    var benhAnDienTuData = sortByDateDesc([
        { name: "Kế hoạch đào tạo sử dụng bệnh án điện tử 2025", soKyHieu: "307/KH-BVYHCT", ngayBanHanh: "22/06/2025", link: "#" },
        { name: "Phân quyền truy cập và vai trò người dùng EMR", soKyHieu: "305/QĐ-BVYHCT", ngayBanHanh: "18/06/2025", link: "#" },
        { name: "Hướng dẫn sử dụng phần mềm bệnh án điện tử", soKyHieu: "303/HD-BVYHCT", ngayBanHanh: "12/06/2025", link: "#" },
        { name: "Quy trình lưu trữ và bảo mật hồ sơ bệnh án", soKyHieu: "302/QĐ-BVYHCT", ngayBanHanh: "10/06/2025", link: "#" },
        { name: "Quy định chữ ký số trong hồ sơ bệnh án điện tử", soKyHieu: "301/QĐ-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" },
        { name: "Quy trình triển khai bệnh án điện tử (EMR)", soKyHieu: "300/QĐ-BVYHCT", ngayBanHanh: "01/06/2025", link: "#" }
    ]);

    var daoTaoLienTucData = sortByDateDesc([
        { name: "Lịch đào tạo liên tục quý III/2025", soKyHieu: "104/TB-BVYHCT", ngayBanHanh: "01/07/2025", link: "#" },
        { name: "Danh sách bác sĩ hoàn thành chương trình CME 2024", soKyHieu: "103/TB-BVYHCT", ngayBanHanh: "05/05/2025", link: "#" },
        { name: "Quy định về chứng chỉ đào tạo liên tục", soKyHieu: "102/QĐ-BVYHCT", ngayBanHanh: "20/04/2025", link: "#" },
        { name: "Thông báo lịch tập huấn cập nhật kiến thức YHCT", soKyHieu: "101/TB-BVYHCT", ngayBanHanh: "15/03/2025", link: "#" },
        { name: "Kế hoạch đào tạo liên tục (CME) cho bác sĩ năm 2025", soKyHieu: "100/KH-BVYHCT", ngayBanHanh: "10/02/2025", link: "#" }
    ]);

    var daoTaoHanhNgheData = sortByDateDesc([
        { name: "Quy trình tiếp nhận hướng dẫn thực tập sinh", soKyHieu: "210/QĐ-BVYHCT", ngayBanHanh: "25/06/2025", link: "#" },
        { name: "Danh sách người hành nghề được cấp phép", soKyHieu: "102/TB-BVYHCT", ngayBanHanh: "05/06/2025", link: "#" },
        { name: "Bản công bố đủ điều kiện hành nghề YHCT", soKyHieu: "01/CB-BVYHCT", ngayBanHanh: "05/01/2025", link: "#" }
    ]);

    var hopTacDaoTaoData = sortByDateDesc([
        { name: "Báo cáo tổng kết công tác đào tạo thực hành 2024", soKyHieu: "90/BC-BVYHCT", ngayBanHanh: "20/06/2025", link: "#" },
        { name: "Hợp đồng đào tạo thực hành với Đại học Y Dược", soKyHieu: "08/HD-BVYHCT", ngayBanHanh: "15/06/2025", link: "#" },
        { name: "Biên bản ghi nhớ hợp tác với Cao đẳng Y tế", soKyHieu: "09/BB-BVYHCT", ngayBanHanh: "10/05/2025", link: "#" },
        { name: "Kế hoạch tiếp nhận sinh viên thực tập năm 2025", soKyHieu: "45/KH-BVYHCT", ngayBanHanh: "15/04/2025", link: "#" }
    ]);

    var chiDaoTuyenData = sortByDateDesc([
        { name: "Báo cáo hoạt động chỉ đạo tuyến 6 tháng", soKyHieu: "25/BC-BVYHCT", ngayBanHanh: "05/07/2025", link: "#" },
        { name: "Hợp đồng chuyển giao kỹ thuật cho tuyến xã", soKyHieu: "05/HD-BVYHCT", ngayBanHanh: "20/04/2025", link: "#" },
        { name: "Kế hoạch chỉ đạo tuyến năm 2025", soKyHieu: "15/KH-BVYHCT", ngayBanHanh: "10/03/2025", link: "#" },
        { name: "Quy trình hỗ trợ chuyên môn tuyến dưới", soKyHieu: "30/QĐ-BVYHCT", ngayBanHanh: "15/02/2025", link: "#" }
    ]);

    var nghienCuuKHData = sortByDateDesc([
        { name: "Nghiên cứu: Hiệu quả cấy chỉ điều trị thoái hóa khớp", soKyHieu: "NC01/BVYHCT", ngayBanHanh: "10/06/2025", link: "#" },
        { name: "Kế hoạch nghiên cứu khoa học năm 2025", soKyHieu: "42/KH-BVYHCT", ngayBanHanh: "05/05/2025", link: "#" },
        { name: "Danh sách đề tài NCKH được nghiệm thu 2024", soKyHieu: "41/QĐ-BVYHCT", ngayBanHanh: "20/04/2025", link: "#" },
        { name: "Quy định quản lý đề tài NCKH bệnh viện", soKyHieu: "40/QĐ-BVYHCT", ngayBanHanh: "10/03/2025", link: "#" }
    ]);

    var thongTinCoSoData = sortByDateDesc([
        { name: "Cơ cấu tổ chức bệnh viện", soKyHieu: "07/QĐ-BVYHCT", ngayBanHanh: "10/03/2025", link: "#" },
        { name: "Danh sách người hành nghề y", soKyHieu: "05/DS-BVYHCT", ngayBanHanh: "01/03/2025", link: "#" },
        { name: "Thiết bị y tế thiết yếu của bệnh viện", soKyHieu: "04/TB-BVYHCT", ngayBanHanh: "20/02/2025", link: "#" },
        { name: "Bảng giá dịch vụ khám chữa bệnh", soKyHieu: "03/G-BVYHCT", ngayBanHanh: "15/02/2025", link: "#" },
        { name: "Thông tin cơ sở vật chất - Danh sách khoa phòng", soKyHieu: "02/TT-BVYHCT", ngayBanHanh: "10/01/2025", link: "#" },
        { name: "Giấy phép hoạt động bệnh viện hạng III", soKyHieu: "01/GP-BVYHCT", ngayBanHanh: "01/01/2025", link: "#" }
    ]);

    var phanMemTrucTuyenData = sortByDateDesc([
        { name: "Phần mềm đào tạo trực tuyến (LMS)", soKyHieu: "", ngayBanHanh: "", link: "https://daotao.bvyhctquangnam.vn" },
        { name: "Phần mềm hội chẩn từ xa", soKyHieu: "", ngayBanHanh: "", link: "https://telemed.bvyhctquangnam.vn" },
        { name: "Phần mềm đăng ký khám bệnh trực tuyến", soKyHieu: "", ngayBanHanh: "", link: "https://dangky.bvyhctquangnam.vn" },
        { name: "Phần mềm bệnh án điện tử (EMR)", soKyHieu: "", ngayBanHanh: "", link: "https://emr.bvyhctquangnam.vn" },
        { name: "Phần mềm quản lý nhân sự y tế", soKyHieu: "", ngayBanHanh: "", link: "https://nhansu.bvyhctquangnam.vn" },
        { name: "Phần mềm báo cáo bệnh truyền nhiễm", soKyHieu: "", ngayBanHanh: "", link: "https://baocao.bvyhctquangnam.vn" },
        { name: "Phần mềm quản lý chất lượng bệnh viện (QMS)", soKyHieu: "", ngayBanHanh: "", link: "https://qms.bvyhctquangnam.vn" },
        { name: "Phần mềm khám chữa bệnh (HIS)", soKyHieu: "", ngayBanHanh: "", link: "https://his.bvyhctquangnam.vn" }
    ]);

    var categories = {
        hanhchinh: { label: "📄 Thủ tục hành chính", data: thuTucHanhChinhData, id: "hanhchinh" },
        khamchua: { label: "🏥 Khám, chữa bệnh", data: khamChuaBenhData, id: "khamchua" },
        dieuduong: { label: "🩺 Điều dưỡng", data: dieuDuongData, id: "dieuduong" },
        bhyt: { label: "🛡️ Bảo hiểm y tế", data: bhytData, id: "bhyt" },
        qlcl: { label: "⭐ Quản lý chất lượng", data: qlclData, id: "qlcl" },
        chuyendoi: { label: "🔄 Chuyển đổi số", data: chuyenDoiSoData, id: "chuyendoi" },
        benhAnDienTu: { label: "💻 Bệnh án điện tử", data: benhAnDienTuData, id: "benhAnDienTu" },
        daotaoLienTuc: { label: "🎓 Đào tạo liên tục", data: daoTaoLienTucData, id: "daotaoLienTuc" },
        daotaoHanhNghe: { label: "📚 Đào tạo hành nghề", data: daoTaoHanhNgheData, id: "daotaoHanhNghe" },
        hopTacDaotao: { label: "🤝 Hợp tác đào tạo", data: hopTacDaoTaoData, id: "hopTacDaotao" },
        chiDaoTuyen: { label: "📡 Chỉ đạo tuyến", data: chiDaoTuyenData, id: "chiDaoTuyen" },
        nghienCuu: { label: "🔬 Nghiên cứu khoa học", data: nghienCuuKHData, id: "nghienCuu" },
        thongTinCoSo: { label: "🏢 Thông tin cơ sở", data: thongTinCoSoData, id: "thongTinCoSo" },
        phanMem: { label: "📱 Phần mềm trực tuyến", data: phanMemTrucTuyenData, id: "phanMem" }
    };

    // Logic chính
    var currentCategoryId = "hanhchinh";
    var currentFullData = thuTucHanhChinhData.slice();
    var currentFilteredData = [];
    var currentPage = 1;
    var currentSearchTerm = "";
    var rowsPerPage = 10;

    var loginOverlay = document.getElementById('loginOverlay');
    var mainContent = document.getElementById('mainContent');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var loginBtn = document.getElementById('loginBtn');
    var loginError = document.getElementById('loginError');
    var logoutBtn = document.getElementById('logoutBtn');
    var tabContainer = document.getElementById('tabContainer');
    var tableBody = document.getElementById('tableBody');
    var paginationDiv = document.getElementById('paginationContainer');
    var searchInput = document.getElementById('searchInput');
    var searchClearBtn = document.getElementById('searchClearBtn');
    document.getElementById('currentYear').innerText = new Date().getFullYear();

    function renderTabs() {
        tabContainer.innerHTML = '<div class="linh-vuc-title">LĨNH VỰC VĂN BẢN</div>';
        for (var key in categories) {
            var cat = categories[key];
            var btn = document.createElement('button');
            btn.className = 'tab-btn-vertical';
            if (cat.id === currentCategoryId) btn.classList.add('active');
            btn.innerHTML = cat.label;
            btn.setAttribute('data-category-id', cat.id);
            btn.addEventListener('click', (function(catId) {
                return function() {
                    var allBtns = document.querySelectorAll('.tab-btn-vertical');
                    for (var i = 0; i < allBtns.length; i++) {
                        allBtns[i].classList.remove('active');
                    }
                    this.classList.add('active');
                    switchCategory(catId);
                };
            })(cat.id));
            tabContainer.appendChild(btn);
        }
    }

    function switchCategory(categoryId) {
        currentCategoryId = categoryId;
        for (var key in categories) {
            if (categories[key].id === categoryId) {
                currentFullData = categories[key].data.slice();
                break;
            }
        }
        currentSearchTerm = "";
        searchInput.value = "";
        searchClearBtn.style.display = "none";
        currentPage = 1;
        renderTable();
    }

    function filterBySearch(data, term) {
        if (!term.trim()) return data.slice();
        var lower = term.toLowerCase();
        var result = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().indexOf(lower) !== -1 || data[i].soKyHieu.toLowerCase().indexOf(lower) !== -1) {
                result.push(data[i]);
            }
        }
        return result;
    }

    function renderTable() {
        var filtered = filterBySearch(currentFullData, currentSearchTerm);
        currentFilteredData = filtered;
        var totalPages = Math.ceil(filtered.length / rowsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        if (filtered.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:40px;">📭 Không có văn bản nào</td></tr>';
            paginationDiv.innerHTML = "";
            return;
        }
        var start = (currentPage - 1) * rowsPerPage;
        var pageData = filtered.slice(start, start + rowsPerPage);
        var html = "";
        for (var i = 0; i < pageData.length; i++) {
            var item = pageData[i];
            var stt = start + i + 1;
            var isNew = false;
            try {
                var parts = item.ngayBanHanh.split('/');
                if (parts.length === 3) {
                    var date = new Date(parts[2], parts[1]-1, parts[0]);
                    isNew = date > new Date(Date.now() - 30*24*60*60*1000);
                }
            } catch(e) {}
            var isExternal = item.link && item.link.indexOf('http') === 0;
            html += '<tr>' +
                '<td><div class="ten-vanban"><span class="stt-icon">' + stt + '</span>' + item.name + (isNew ? '<span class="new-badge">Mới</span>' : '') + '</div></td>' +
                '<td>' + item.soKyHieu + '</td>' +
                '<td>' + item.ngayBanHanh + '</td>' +
                '<td><a href="' + item.link + '" target="_blank" class="btn-pdf"><i class="fas ' + (isExternal ? 'fa-external-link-alt' : 'fa-file-pdf') + '"></i> ' + (isExternal ? 'Truy cập' : 'Xem') + '</a></td>' +
                '</tr>';
        }
        tableBody.innerHTML = html;
        if (totalPages <= 1) { paginationDiv.innerHTML = ""; return; }
        paginationDiv.innerHTML = '<button onclick="window.changePage(' + (currentPage-1) + ')" ' + (currentPage===1 ? 'disabled' : '') + '><i class="fas fa-chevron-left"></i> Trước</button>' +
            '<span class="page-info">' + currentPage + ' / ' + totalPages + '</span>' +
            '<button onclick="window.changePage(' + (currentPage+1) + ')" ' + (currentPage===totalPages ? 'disabled' : '') + '>Sau <i class="fas fa-chevron-right"></i></button>';
    }

    window.changePage = function(newPage) {
        if (currentFilteredData.length === 0) return;
        var total = Math.ceil(currentFilteredData.length / rowsPerPage);
        if (newPage < 1 || newPage > total) return;
        currentPage = newPage;
        renderTable();
    };

    function handleSearch() { currentSearchTerm = searchInput.value; searchClearBtn.style.display = currentSearchTerm ? "block" : "none"; currentPage = 1; renderTable(); }
    function clearSearch() { searchInput.value = ""; currentSearchTerm = ""; searchClearBtn.style.display = "none"; currentPage = 1; renderTable(); }

    function checkLogin() {
        if (localStorage.getItem('loggedInMed') === 'true') {
            loginOverlay.style.display = 'none';
            mainContent.style.display = 'flex';
            mainContent.style.flexDirection = 'column';
            mainContent.style.height = '100%';
            renderTabs();
            switchCategory('hanhchinh');
            searchInput.addEventListener('input', handleSearch);
            searchClearBtn.addEventListener('click', clearSearch);
        } else {
            loginOverlay.style.display = 'flex';
            mainContent.style.display = 'none';
        }
    }
    function doLogin() { var user = usernameInput.value.trim(); var pass = passwordInput.value.trim(); if (user === 'bvyhctquangnam' && pass === '49015') { localStorage.setItem('loggedInMed', 'true'); loginError.textContent = ''; checkLogin(); } else { loginError.textContent = 'Sai tên đăng nhập hoặc mật khẩu!'; } }
    function doLogout() { localStorage.removeItem('loggedInMed'); loginOverlay.style.display = 'flex'; mainContent.style.display = 'none'; usernameInput.value = ''; passwordInput.value = ''; }
    loginBtn.addEventListener('click', doLogin);
    logoutBtn.addEventListener('click', doLogout);
    usernameInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') doLogin(); });
    passwordInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') doLogin(); });
    checkLogin();