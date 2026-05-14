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
        { name: "Quy trình công khai minh bạch bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy chế chi tiêu nội bộ năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Nội quy lao động bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Sơ đồ tổ chức bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Kế hoạch phát triển bệnh viện hạng III 2025-2030", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Thông tin giờ làm việc các khoa phòng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Giấy phép hoạt động bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var khamChuaBenhData = sortByDateDesc([
        { name: "Báo cáo sơ kết công tác khám chữa bệnh 6 tháng đầu năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Báo cáo thống kê khám chữa bệnh quý II/2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Phương án triển khai điều trị ngoại trú YHCT, PHCN", soKyHieu: "35/PA-BVYHCT", ngayBanHanh: "08/05/2026", link: "https://drive.google.com/file/d/1X614iQD9OkKB00drbiSRDGJpkioFg_qK/view" },
        { name: "Quy trình thực hiện kỹ thuật ngâm thuốc YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hướng dẫn chẩn đoán điều trị bệnh bằng YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Báo cáo thống kê khám chữa bệnh tháng 05/2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình cấp cứu ngừng tuần hoàn", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình điện châm - thủy châm an toàn", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Chấn chỉnh việc ghi hồ sơ bệnh án và kê đơn thuốc", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Công văn chấn chỉnh công tác khám chữa bệnh ngoại trú", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình hội chẩn liên khoa", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Công văn hướng dẫn thực hiện dịch vụ xoa bóp bấm huyệt", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Công văn hướng dẫn thực hiện dịch vụ kỹ thuật hào châm", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình khám bệnh ngoại trú BHYT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Báo cáo tổng kết công tác khám chữa bệnh năm 2024", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var dieuDuongData = sortByDateDesc([
        { name: "Quy trình chăm sóc bệnh nhân nặng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình phòng ngừa té ngã cho người bệnh", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Kế hoạch giám sát nhiễm khuẩn bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình khử khuẩn dụng cụ YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình vệ sinh tay và sát khuẩn nhanh", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var bhytData = sortByDateDesc([
        { name: "Quy trình tiếp nhận thanh toán BHYT ngoại trú", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Cảnh báo từ BHXH về thanh toán trùng lặp", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Thông báo giám định BHYT quý II/2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Phụ lục hợp đồng BHYT - bổ sung thuốc YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hợp đồng khám chữa bệnh BHYT năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var qlclData = sortByDateDesc([
        { name: "Quy trình xử lý sự cố y khoa", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Mạng lưới Quản lý chất lượng bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy chế hoạt động Tổ Quản lý chất lượng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quyết định thành lập Hội đồng Quản lý chất lượng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Danh sách thành viên Hội đồng Thuốc và điều trị", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Danh sách thành viên Hội đồng Khoa học kỹ thuật", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quyết định thành lập Hội đồng Chỉ đạo tuyến", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy chế hoạt động Hội đồng Thuốc và điều trị", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quyết định thành lập Hội đồng Thuốc và điều trị", soKyHieu: "56/QĐ-BVYHCT", ngayBanHanh: "24/03/2026", link: "https://drive.google.com/file/d/1foTueQu4cgi8r6EFMLOfAidlgib_hqus/view" },
	{ name: "Quyết định thành lập Tiểu ban xây dựng danh mục thuốc và giám sát sử dụng thuốc", soKyHieu: "164/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/1_hVvj-o07BAGZPSDnyr6pwjwaBd-3z04/view" },
	{ name: "Quyết định thành lập Tiểu ban giám sát sử dụng kháng sinh và theo dõi sự kháng thuốc của vi khuẩn gây bệnh", soKyHieu: "165/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/14uxpVmwYtc26kSw-T50ydPwGs4li19Ap/view" },
	{ name: "Quyết định thành lập Tiểu ban xây dựng hướng dẫn điều trị", soKyHieu: "166/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/12CZ0vDOkxcPMVOmziJNqacNcgyIyeFCL/view" },
	{ name: "Quyết định thành lập Tiểu ban giám sát ADR và sai sót trong điều trị", soKyHieu: "167/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/1Xkm4bP6dQ6HvbTsBAtV6vpvL4k0va7qc/view" },
	{ name: "Quyết định thành lập Tiểu ban giám sát thông tin thuốc", soKyHieu: "168/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/1_hVvj-o07BAGZPSDnyr6pwjwaBd-3z04/view" },
	{ name: "Quyết định thành lập Hội đồng Quản lý chất lượng bệnh viện", soKyHieu: "163/QĐ-BVYHCT", ngayBanHanh: "11/05/2026", link: "https://drive.google.com/file/d/1Br75lvJHmE6OO-aCP0yBcSmo4zoPAs64/view" },	
        { name: "Quy chế hoạt động Hội đồng Khoa học kỹ thuật", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quyết định thành lập Hội đồng Khoa học kỹ thuật", soKyHieu: "55/QĐ-BVYHCT", ngayBanHanh: "24/03/2026", link: "https://drive.google.com/file/d/1qCvSQrlJUTxhW6D_yWqCCphnSmOF1wsl/view" }
    ]);

    var chuyenDoiSoData = sortByDateDesc([
        { name: "Quyết định thành lập Ban chỉ đạo chuyển đổi số", soKyHieu: "198/QĐ-BVYHCT", ngayBanHanh: "10/04/2025", link: "#" },
	{ name: "Quyết định thành lập Tổ giúp việc Ban chỉ đạo chuyển đổi số", soKyHieu: "198/QĐ-BVYHCT", ngayBanHanh: "10/04/2025", link: "#" },
	{ name: "Kế hoạch ứng dụng AI trong hỗ trợ chẩn đoán YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hướng dẫn thanh toán viện phí không dùng tiền mặt", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy định quản lý hồ sơ sức khỏe điện tử", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Chiến lược chuyển đổi số bệnh viện 2025-2030", soKyHieu: "", ngayBanHanh: "", link: "#" },
	{ name: "Kế hoạch chuyển đổi số bệnh viện 2026", soKyHieu: "37/KH-BVYHCT", ngayBanHanh: "13/05/2026", link: "https://drive.google.com/file/d/1c0Hq-06PhmIDusJozMVZ58HjNhf76rNi/view" }
    ]);

    var benhAnDienTuData = sortByDateDesc([
        { name: "Kế hoạch đào tạo sử dụng bệnh án điện tử 2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
	{ name: "Kế hoạch tập huấn chữ ký số Hồ sơ bệnh án điện tử", soKyHieu: "386/KH-BVYHCT", ngayBanHanh: "08/10/2025", link: "#" },
        { name: "Phân quyền truy cập và vai trò người dùng EMR", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hướng dẫn sử dụng phần mềm bệnh án điện tử", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy trình lưu trữ và bảo mật hồ sơ bệnh án", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy định chữ ký số trong hồ sơ bệnh án điện tử", soKyHieu: "", ngayBanHanh: "", link: "#" },
	{ name: "Kế hoạch triển khai bệnh án điện tử (EMR)", soKyHieu: "211/QĐ-BVYHCT", ngayBanHanh: "15/04/2025", link: "#" },
	{ name: "Quyết định triển khai bệnh án điện tử (EMR)", soKyHieu: "367/QĐ-BVYHCT", ngayBanHanh: "30/09/2025", link: "#" },
	{ name: "Quyết định thành lập Hội đồng chuyên môn đánh giá triển khai bệnh án điện tử (EMR)", soKyHieu: "341/QĐ-BVYHCT", ngayBanHanh: "23/09/2025", link: "#" },
	{ name: "Công văn triển khai bệnh án điện tử (EMR)", soKyHieu: "363/QĐ-BVYHCT", ngayBanHanh: "30/09/2025", link: "#" },
	{ name: "Báo cáo đánh giá triển khai bệnh án điện tử Công văn số 365/TTYQG-GPQLCL", soKyHieu: "366/QĐ-BVYHCT", ngayBanHanh: "30/09/2025", link: "#" },
	{ name: "Báo cáo đánh giá triển khai bệnh án điện tử Thông tư số 13/2025/TT-BYT", soKyHieu: "365/QĐ-BVYHCT", ngayBanHanh: "30/09/2025", link: "#" },
	{ name: "Báo cáo về việc đáp ứng các yêu cầu về quy định hồ sơ bệnh án điện tử", soKyHieu: "345/QĐ-BVYHCT", ngayBanHanh: "24/09/2025", link: "#" },
	{ name: "Quyết định về việc ban hành phê duyệt mẫu chữ ký số, chữ ký điện tử trên hồ sơ bệnh án điện tử", soKyHieu: "332/QĐ-BVYHCT", ngayBanHanh: "19/09/2025", link: "#" },
	{ name: "Quyết định về việc ban hành quy chế lập, quản lý và sử dụng bệnh án điện tử", soKyHieu: "328/QĐ-BVYHCT", ngayBanHanh: "18/09/2025", link: "#" },
	{ name: "Quyết định Về việc ban hành quy chế về hoàn thiện, quản lý và sử dụng bệnh án điển tử", soKyHieu: "327/QĐ-BVYHCT", ngayBanHanh: "18/09/2025", link: "#" },
	{ name: "Quyết định về việc bàn giao tài khoản đăng nhập phần mềm HIS và Hồ sơ bệnh án điện tử", soKyHieu: "320/QĐ-BVYHCT", ngayBanHanh: "16/09/2025", link: "#" },
	{ name: "Quyết định về việc quy định thứ tự sắp xếp các mẫu giấy, phiếu trong hồ sơ bệnh án điện tử", soKyHieu: "13/QĐ-BVYHCT", ngayBanHanh: "29/01/2026", link: "https://drive.google.com/drive/folders/1QOFr7jctRLYo2Z2tEzi9Ghtx7Chzd6fl" },
        { name: "Quy trình triển khai bệnh án điện tử (EMR)", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var daoTaoLienTucData = sortByDateDesc([
        { name: "Lịch đào tạo liên tục quý III/2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Danh sách bác sĩ hoàn thành chương trình CME 2024", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy định về chứng chỉ đào tạo liên tục", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Thông báo lịch tập huấn cập nhật kiến thức YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Kế hoạch đào tạo liên tục (CME) cho bác sĩ năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var daoTaoHanhNgheData = sortByDateDesc([
        { name: "Quy trình tiếp nhận hướng dẫn thực tập sinh", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Danh sách người hành nghề được cấp phép", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Bản công bố đủ điều kiện hành nghề YHCT", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var hopTacDaoTaoData = sortByDateDesc([
        { name: "Báo cáo tổng kết công tác đào tạo thực hành 2024", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hợp đồng đào tạo thực hành với Đại học Y Dược", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Biên bản ghi nhớ hợp tác với Cao đẳng Y tế", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Kế hoạch tiếp nhận sinh viên thực tập năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var chiDaoTuyenData = sortByDateDesc([
        { name: "Báo cáo hoạt động chỉ đạo tuyến 6 tháng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Hợp đồng chuyển giao kỹ thuật cho tuyến xã", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Kế hoạch chỉ đạo tuyến năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
	{ name: "Công văn đề xuất BVCCTW hỗ trợ chuyên môn và chuyển giao kỹ thuật theo đề án 1816 năm 2027", soKyHieu: "38/BVYHCT-KHTH-ĐD", ngayBanHanh: "08/05/2026", link: "https://drive.google.com/file/d/1RNze9zX7NLX_gSTk0h4u5WkVfIUuA2N0/view" },
	{ name: "Công văn đề nghị BV YHCT Đà Nẵng chuyển giao kỹ thuật Hỏa trị liệu", soKyHieu: "39/BVYHCT-KHTH-ĐD", ngayBanHanh: "08/05/2026", link: "https://drive.google.com/file/d/1SL23NLhrAUVMAvUZzxN4LAQf7XRTrlPL/view" },
        { name: "Quy trình hỗ trợ chuyên môn tuyến dưới", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var nghienCuuKHData = sortByDateDesc([
        { name: "Nghiên cứu: Hiệu quả cấy chỉ điều trị thoái hóa khớp", soKyHieu: "", ngayBanHanh: "", link: "#" },
	{ name: "Quyết định thành lập Hội đồng Khoa học và sáng kiến", soKyHieu: "54/QĐ-BVYHCT", ngayBanHanh: "24/03/2026", link: "https://drive.google.com/file/d/1EOuITTtFL6qR_ummGj2nKdoFKKew5j8j/view" },
        { name: "Kế hoạch nghiên cứu khoa học năm 2025", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Danh sách đề tài NCKH được nghiệm thu 2024", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Quy định quản lý đề tài NCKH bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" }
    ]);

    var thongTinCoSoData = sortByDateDesc([
        { name: "Sở Y tế cập nhật thông báo xếp cấp chuyên môn kỹ thuật", soKyHieu: "560/SYT-NVY", ngayBanHanh: "20/01/2026", link: "https://drive.google.com/file/d/1CA1K_bgK26Q5wWXZXYljEd0r68vkZqzZ/view" },
        { name: "Danh sách người hành nghề y", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Thiết bị y tế thiết yếu của bệnh viện", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Bảng giá dịch vụ khám chữa bệnh", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Thông tin cơ sở vật chất - Danh sách khoa phòng", soKyHieu: "", ngayBanHanh: "", link: "#" },
        { name: "Giấy phép hoạt động bệnh viện", soKyHieu: "01367/ĐNA-GPHĐ", ngayBanHanh: "30/09/2025", link: "https://drive.google.com/drive/folders/1b06vBU8QMD6opQrs2akKn2MIFSk1jz8l" }
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