const Icon = ({ children, viewBox = '0 0 19 19', className = '' }) => (
  <svg
    width="18"
    height="18"
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    {children}
  </svg>
)

const NAV_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    active: true,
    icon: (stroke) => (
      <>
        <path d="M6.97207 2.3244H3.09866C2.67081 2.3244 2.32397 2.67124 2.32397 3.09908V8.52186C2.32397 8.94971 2.67081 9.29654 3.09866 9.29654H6.97207C7.39991 9.29654 7.74675 8.94971 7.74675 8.52186V3.09908C7.74675 2.67124 7.39991 2.3244 6.97207 2.3244Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4945 2.3244H11.6211C11.1933 2.3244 10.8464 2.67124 10.8464 3.09908V5.42313C10.8464 5.85098 11.1933 6.19781 11.6211 6.19781H15.4945C15.9224 6.19781 16.2692 5.85098 16.2692 5.42313V3.09908C16.2692 2.67124 15.9224 2.3244 15.4945 2.3244Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4945 9.29681H11.6211C11.1933 9.29681 10.8464 9.64365 10.8464 10.0715V15.4943C10.8464 15.9221 11.1933 16.269 11.6211 16.269H15.4945C15.9224 16.269 16.2692 15.9221 16.2692 15.4943V10.0715C16.2692 9.64365 15.9224 9.29681 15.4945 9.29681Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.97207 12.3949H3.09866C2.67081 12.3949 2.32397 12.7417 2.32397 13.1696V15.4936C2.32397 15.9215 2.67081 16.2683 3.09866 16.2683H6.97207C7.39991 16.2683 7.74675 15.9215 7.74675 15.4936V13.1696C7.74675 12.7417 7.39991 12.3949 6.97207 12.3949Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: 'tradeshield',
    label: 'TradeShield',
    icon: (stroke) => (
      <path
        d="M15.494 10.0705C15.494 13.9439 12.7826 15.8806 9.55997 17.0039C9.39122 17.0611 9.20791 17.0584 9.04093 16.9962C5.81051 15.8806 3.09912 13.9439 3.09912 10.0705V4.64772C3.09912 4.44226 3.18074 4.24522 3.32602 4.09994C3.4713 3.95466 3.66834 3.87304 3.8738 3.87304C5.42317 3.87304 7.35987 2.94342 8.70782 1.7659C8.87194 1.62569 9.08072 1.54865 9.29658 1.54865C9.51244 1.54865 9.72122 1.62569 9.88534 1.7659C11.241 2.95117 13.17 3.87304 14.7194 3.87304C14.9248 3.87304 15.1219 3.95466 15.2671 4.09994C15.4124 4.24522 15.494 4.44226 15.494 4.64772V10.0705Z"
        stroke={stroke}
        strokeWidth="1.54936"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'taxreconcile',
    label: 'TaxReconcile',
    icon: (stroke) => (
      <>
        <path
          d="M3.09912 1.54907V17.0427L4.64849 16.268L6.19785 17.0427L7.74721 16.268L9.29658 17.0427L10.8459 16.268L12.3953 17.0427L13.9447 16.268L15.494 17.0427V1.54907L13.9447 2.32375L12.3953 1.54907L10.8459 2.32375L9.29658 1.54907L7.74721 2.32375L6.19785 1.54907L4.64849 2.32375L3.09912 1.54907Z"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3952 6.19769H7.74712C7.3362 6.19769 6.94211 6.36093 6.65155 6.65149C6.36099 6.94205 6.19775 7.33614 6.19775 7.74706C6.19775 8.15797 6.36099 8.55206 6.65155 8.84262C6.94211 9.13319 7.3362 9.29642 7.74712 9.29642H10.8458C11.2568 9.29642 11.6509 9.45966 11.9414 9.75022C12.232 10.0408 12.3952 10.4349 12.3952 10.8458C12.3952 11.2567 12.232 11.6508 11.9414 11.9414C11.6509 12.2319 11.2568 12.3952 10.8458 12.3952H6.19775"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.29639 13.5565V5.03503" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: 'freightsync',
    label: 'FreightSync',
    icon: (stroke) => (
      <>
        <path
          d="M10.8459 13.9436V4.64745C10.8459 4.23653 10.6826 3.84244 10.3921 3.55188C10.1015 3.26132 9.70742 3.09808 9.29651 3.09808H3.09905C2.68813 3.09808 2.29404 3.26132 2.00348 3.55188C1.71292 3.84244 1.54968 4.23653 1.54968 4.64745V13.169C1.54968 13.3744 1.6313 13.5715 1.77658 13.7167C1.92186 13.862 2.11891 13.9436 2.32436 13.9436H3.87373"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.6201 13.9434H6.97205" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M14.7198 13.944H16.2692C16.4747 13.944 16.6717 13.8624 16.817 13.7171C16.9623 13.5718 17.0439 13.3748 17.0439 13.1693V10.3418C17.0436 10.166 16.9835 9.99548 16.8735 9.85835L14.1776 6.48849C14.1051 6.39775 14.0132 6.32447 13.9086 6.27405C13.804 6.22363 13.6894 6.19737 13.5733 6.1972H10.8464"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.1696 15.4936C14.0253 15.4936 14.719 14.7999 14.719 13.9442C14.719 13.0885 14.0253 12.3948 13.1696 12.3948C12.3139 12.3948 11.6202 13.0885 11.6202 13.9442C11.6202 14.7999 12.3139 15.4936 13.1696 15.4936Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.42327 15.4936C6.27896 15.4936 6.97263 14.7999 6.97263 13.9442C6.97263 13.0885 6.27896 12.3948 5.42327 12.3948C4.56758 12.3948 3.8739 13.0885 3.8739 13.9442C3.8739 14.7999 4.56758 15.4936 5.42327 15.4936Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: 'tenderwin',
    label: 'TenderWin',
    icon: (stroke) => (
      <>
        <path
          d="M4.64841 6.97296H3.48639C2.97274 6.97296 2.48013 6.76891 2.11693 6.40571C1.75373 6.04251 1.54968 5.5499 1.54968 5.03625C1.54968 4.52261 1.75373 4.03 2.11693 3.6668C2.48013 3.30359 2.97274 3.09955 3.48639 3.09955H4.64841"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9445 6.97296H15.1065C15.6201 6.97296 16.1127 6.76891 16.4759 6.40571C16.8391 6.04251 17.0432 5.5499 17.0432 5.03625C17.0432 4.52261 16.8391 4.03 16.4759 3.6668C16.1127 3.30359 15.6201 3.09955 15.1065 3.09955H13.9445"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M3.09912 17.043H15.494" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M7.74653 11.3575V13.1702C7.74653 13.5963 7.38243 13.9294 6.99509 14.1076C6.08097 14.5259 5.42249 15.6802 5.42249 17.0437"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8464 11.3575V13.1702C10.8464 13.5963 11.2105 13.9294 11.5979 14.1076C12.512 14.5259 13.1705 15.6802 13.1705 17.0437"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9444 1.5495H4.64819V6.97228C4.64819 8.20503 5.1379 9.38729 6.00959 10.259C6.88128 11.1307 8.06354 11.6204 9.29629 11.6204C10.529 11.6204 11.7113 11.1307 12.583 10.259C13.4547 9.38729 13.9444 8.20503 13.9444 6.97228V1.5495Z"
          stroke={stroke}
          strokeWidth="1.54936"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

const SECONDARY_ITEMS = [
  {
    label: 'Reports',
    icon: (stroke) => (
      <>
        <path d="M13.9445 15.4932V7.74634" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.29639 15.4935V3.09863" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.64819 15.4939V10.8458" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Notifications',
    badge: '3',
    icon: (stroke) => (
      <>
        <path d="M7.95496 16.2678C8.09095 16.5033 8.28653 16.6989 8.52206 16.8349C8.75758 16.9709 9.02475 17.0424 9.29671 17.0424C9.56866 17.0424 9.83583 16.9709 10.0714 16.8349C10.3069 16.6989 10.5025 16.5033 10.6385 16.2678" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.52723 11.873C2.42603 11.9839 2.35924 12.1218 2.335 12.27C2.31075 12.4182 2.33009 12.5702 2.39066 12.7076C2.45123 12.845 2.55042 12.9618 2.67617 13.0439C2.80191 13.1259 2.9488 13.1697 3.09895 13.1698H15.4939C15.644 13.1698 15.7909 13.1263 15.9167 13.0444C16.0426 12.9625 16.1419 12.8458 16.2026 12.7085C16.2633 12.5712 16.2829 12.4192 16.2588 12.271C16.2348 12.1228 16.1682 11.9848 16.0671 11.8738C15.0368 10.8117 13.9445 9.68295 13.9445 6.19765C13.9445 4.9649 13.4548 3.78264 12.5831 2.91096C11.7114 2.03927 10.5292 1.54956 9.2964 1.54956C8.06365 1.54956 6.88139 2.03927 6.00971 2.91096C5.13802 3.78264 4.64831 4.9649 4.64831 6.19765C4.64831 9.68295 3.55523 10.8117 2.52723 11.873Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Settings',
    icon: (stroke) => (
      <>
        <path d="M9.46661 1.54907H9.12575C8.71484 1.54907 8.32075 1.71231 8.03019 2.00287C7.73963 2.29343 7.57639 2.68752 7.57639 3.09844V3.23788C7.57611 3.50958 7.50439 3.77643 7.36842 4.01166C7.23245 4.24689 7.03701 4.44223 6.80171 4.57808L6.46859 4.77175C6.23306 4.90774 5.96588 4.97933 5.69391 4.97933C5.42194 4.97933 5.15476 4.90774 4.91923 4.77175L4.80303 4.70978C4.4475 4.50469 4.02512 4.44905 3.62861 4.55508C3.2321 4.6611 2.89386 4.92013 2.68814 5.27529L2.51771 5.56967C2.31263 5.9252 2.25699 6.34758 2.36302 6.74409C2.46904 7.1406 2.72807 7.47884 3.08323 7.68456L3.19943 7.76202C3.4336 7.89721 3.62831 8.09133 3.76422 8.32509C3.90012 8.55884 3.97249 8.82409 3.97412 9.09448V9.48957C3.9752 9.76258 3.90412 10.031 3.76809 10.2677C3.63205 10.5044 3.43587 10.701 3.19943 10.8375L3.08323 10.9072C2.72807 11.113 2.46904 11.4512 2.36302 11.8477C2.25699 12.2442 2.31263 12.6666 2.51771 13.0221L2.68814 13.3165C2.89386 13.6717 3.2321 13.9307 3.62861 14.0367C4.02512 14.1427 4.4475 14.0871 4.80303 13.882L4.91923 13.82C5.15476 13.6841 5.42194 13.6125 5.69391 13.6125C5.96588 13.6125 6.23306 13.6841 6.46859 13.82L6.80171 14.0137C7.03701 14.1496 7.23245 14.3449 7.36842 14.5801C7.50439 14.8154 7.57611 15.0822 7.57639 15.3539V15.4934C7.57639 15.9043 7.73963 16.2984 8.03019 16.5889C8.32075 16.8795 8.71484 17.0427 9.12575 17.0427H9.46661C9.87753 17.0427 10.2716 16.8795 10.5622 16.5889C10.8527 16.2984 11.016 15.9043 11.016 15.4934V15.3539C11.0163 15.0822 11.088 14.8154 11.224 14.5801C11.3599 14.3449 11.5554 14.1496 11.7907 14.0137L12.1238 13.82C12.3593 13.6841 12.6265 13.6125 12.8985 13.6125C13.1704 13.6125 13.4376 13.6841 13.6731 13.82L13.7893 13.882C14.1449 14.0871 14.5672 14.1427 14.9638 14.0367C15.3603 13.9307 15.6985 13.6717 15.9042 13.3165L16.0747 13.0144C16.2797 12.6588 16.3354 12.2365 16.2294 11.84C16.1233 11.4434 15.8643 11.1052 15.5091 10.8995L15.3929 10.8375C15.1565 10.701 14.9603 10.5044 14.8243 10.2677C14.6882 10.031 14.6172 9.76258 14.6183 9.48957V9.10222C14.6172 8.82921 14.6882 8.56076 14.8243 8.32405C14.9603 8.08734 15.1565 7.89078 15.3929 7.75428L15.5091 7.68456C15.8643 7.47884 16.1233 7.1406 16.2294 6.74409C16.3354 6.34758 16.2797 5.9252 16.0747 5.56967L15.9042 5.27529C15.6985 4.92013 15.3603 4.6611 14.9638 4.55508C14.5672 4.44905 14.1449 4.50469 13.7893 4.70978L13.6731 4.77175C13.4376 4.90774 13.1704 4.97933 12.8985 4.97933C12.6265 4.97933 12.3593 4.90774 12.1238 4.77175L11.7907 4.57808C11.5554 4.44223 11.3599 4.24689 11.224 4.01166C11.088 3.77643 11.0163 3.50958 11.016 3.23788V3.09844C11.016 2.68752 10.8527 2.29343 10.5622 2.00287C10.2716 1.71231 9.87753 1.54907 9.46661 1.54907Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.29609 11.62C10.5796 11.62 11.6201 10.5795 11.6201 9.29597C11.6201 8.01244 10.5796 6.97192 9.29609 6.97192C8.01256 6.97192 6.97205 8.01244 6.97205 9.29597C6.97205 10.5795 8.01256 11.62 9.29609 11.62Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Integrations',
    icon: (stroke) => (
      <>
        <path d="M9.29639 17.0431V13.1697" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.97205 6.19814V1.55005" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6202 6.19814V1.55005" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9444 6.19812V10.0715C13.9444 10.8934 13.6179 11.6815 13.0368 12.2627C12.4557 12.8438 11.6675 13.1703 10.8457 13.1703H7.74692C6.92509 13.1703 6.13691 12.8438 5.55579 12.2627C4.97467 11.6815 4.64819 10.8934 4.64819 10.0715V6.19812H13.9444Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Help Center',
    icon: (stroke) => (
      <>
        <path d="M9.29651 17.0422C13.575 17.0422 17.0433 13.5739 17.0433 9.29541C17.0433 5.01695 13.575 1.54858 9.29651 1.54858C5.01805 1.54858 1.54968 5.01695 1.54968 9.29541C1.54968 13.5739 5.01805 17.0422 9.29651 17.0422Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.04236 6.97141C7.22449 6.45367 7.58398 6.01709 8.05716 5.73899C8.53033 5.4609 9.08666 5.35925 9.62761 5.45204C10.1686 5.54482 10.6592 5.82606 11.0127 6.24594C11.3661 6.66582 11.5596 7.19725 11.5588 7.74609C11.5588 9.29546 9.23471 10.0701 9.23471 10.0701" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.29639 13.1691H9.30264" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'User Management',
    icon: (stroke) => (
      <>
        <path d="M12.3952 16.2681V14.7187C12.3952 13.8969 12.0688 13.1087 11.4876 12.5276C10.9065 11.9465 10.1183 11.62 9.2965 11.62H4.64841C3.82658 11.62 3.0384 11.9465 2.45728 12.5276C1.87615 13.1087 1.54968 13.8969 1.54968 14.7187V16.2681" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.97263 8.52168C8.68401 8.52168 10.0714 7.13433 10.0714 5.42295C10.0714 3.71157 8.68401 2.32422 6.97263 2.32422C5.26125 2.32422 3.8739 3.71157 3.8739 5.42295C3.8739 7.13433 5.26125 8.52168 6.97263 8.52168Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0433 16.2681V14.7187C17.0428 14.0321 16.8143 13.3652 16.3936 12.8225C15.973 12.2799 15.384 11.8923 14.7192 11.7207" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.395 2.42444C13.0616 2.5951 13.6524 2.98275 14.0743 3.52628C14.4961 4.0698 14.7251 4.73828 14.7251 5.42633C14.7251 6.11438 14.4961 6.78286 14.0743 7.32639C13.6524 7.86991 13.0616 8.25756 12.395 8.42823" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Billing',
    icon: (stroke) => (
      <>
        <path d="M15.494 3.87329H3.09905C2.24336 3.87329 1.54968 4.56697 1.54968 5.42266V13.1695C1.54968 14.0252 2.24336 14.7188 3.09905 14.7188H15.494C16.3497 14.7188 17.0433 14.0252 17.0433 13.1695V5.42266C17.0433 4.56697 16.3497 3.87329 15.494 3.87329Z" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.54968 7.7467H17.0433" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Logout',
    icon: (stroke) => (
      <>
        <path d="M6.97207 16.2685H3.87334C3.46242 16.2685 3.06834 16.1053 2.77777 15.8147C2.48721 15.5241 2.32397 15.1301 2.32397 14.7191V3.87358C2.32397 3.46267 2.48721 3.06858 2.77777 2.77802C3.06834 2.48745 3.46242 2.32422 3.87334 2.32422H6.97207" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.395 13.1697L16.2684 9.29626L12.395 5.42285" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2682 9.29614H6.97205" stroke={stroke} strokeWidth="1.54936" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

const STATS = [
  {
    label: 'Documents Processed',
    value: '58,321',
    change: '+12.4%',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 23.47 19.83 24.53 29.75 20.89 39.66 18.31 49.58 13.29 59.5 9.65 69.41 7.37 79.33 3.88 89.24 2.48',
    icon: (
      <>
        <path
          d="M10.85 1.45H4.34c-.77 0-1.45.6-1.45 1.44v11.57c0 .77.6 1.44 1.44 1.44h8.68c.77 0 1.44-.6 1.44-1.44V5.06l-3.6-3.6Z"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.12 1.45v2.89c0 .38.15.75.42 1.02.27.27.64.42 1.02.42h2.9M7.23 6.51H5.78M11.57 9.4H5.78M11.57 12.29H5.78"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: 'Discrepancy Alerts',
    value: '8',
    change: '-3.2%',
    bg: 'bg-[#FF6900]/10',
    sparkline: 'M0 2.48 9.92 9.92 19.83 12.39 29.75 4.96 39.66 14.87 49.58 19.83 59.5 22.31 69.41 17.35 79.33 24.79 89.24 27.27',
    icon: (
      <>
        <path
          d="M15.71 13.02 9.93 2.89a1.53 1.53 0 0 0-2.53 0L1.63 13.02a1.53 1.53 0 0 0 1.26 2.17h11.57a1.53 1.53 0 0 0 1.25-2.17Z"
          stroke="#FF8904"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.68 6.51v2.89M8.68 12.29h.01" stroke="#FF8904" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Tax Credits Recovered',
    value: 'Rs 12.5M',
    change: '+8.7%',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 24.46 19.83 23.06 29.75 19.32 39.66 16.98 49.58 13.71 59.5 10.43 69.41 7.62 79.33 4.82 89.24 2.48',
    icon: (
      <>
        <path
          d="M15.91 5.06 9.76 11.21 6.15 7.59 1.45 12.29"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.57 5.06h4.34v4.34" stroke="#F2902F" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Open Tenders',
    value: '24',
    change: '+2 new',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 23.14 19.83 19.01 29.75 23.14 39.66 14.87 49.58 19.01 59.5 10.74h9.92l9.92-4.13 9.92-4.13',
    icon: (
      <>
        <path
          d="M7.95 15.71a1.53 1.53 0 0 0 1.45.2l5.06-2.9a1.53 1.53 0 0 0 .73-1.33V5.78a1.53 1.53 0 0 0-.73-1.33L9.4 1.64a1.53 1.53 0 0 0-1.45 0l-5.06 2.9a1.53 1.53 0 0 0-.73 1.33v5.9a1.53 1.53 0 0 0 .73 1.33l5.06 2.9Z"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.68 15.91V8.68M2.38 5.06l6.3 3.62 6.3-3.62M5.42 3.09l6.51 3.72"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

const ROWS = [
  { ref: 'REF-2026-8821', module: 'TradeShield', color: '#FF8904', date: 'Jul 13, 2026', user: 'Kamran A.', status: 'Approved', statusColor: '#05DF72', statusBg: 'bg-[#00C950]/10' },
  { ref: 'REF-2026-8820', module: 'TaxReconcile', color: '#51A2FF', date: 'Jul 13, 2026', user: 'Sana M.', status: 'Processing', statusColor: '#51A2FF', statusBg: 'bg-[#2B7FFF]/10' },
  { ref: 'REF-2026-8819', module: 'FreightSync', color: '#00D5BE', date: 'Jul 12, 2026', user: 'Ahmed R.', status: 'Action Required', statusColor: '#FF8904', statusBg: 'bg-[#FF6900]/10' },
  { ref: 'REF-2026-8818', module: 'TenderWin', color: '#C27AFF', date: 'Jul 12, 2026', user: 'Zara K.', status: 'Pending', statusColor: '#FDC700', statusBg: 'bg-[#F0B100]/10' },
  { ref: 'REF-2026-8817', module: 'TradeShield', color: '#FF8904', date: 'Jul 11, 2026', user: 'Imran T.', status: 'Cleared', statusColor: '#00D492', statusBg: 'bg-[#00BC7D]/10' },
  { ref: 'REF-2026-8816', module: 'TaxReconcile', color: '#51A2FF', date: 'Jul 11, 2026', user: 'Farah N.', status: 'Failed', statusColor: '#FF6467', statusBg: 'bg-[#FB2C36]/10' },
]

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

const DashboardPreview = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark'
  const palette = isDark
    ? {
        shell: 'bg-[#090909]',
        sidebar: 'bg-[#111111] border-white/[0.06]',
        header: 'bg-[#090909] border-white/[0.06]',
        card: 'bg-[#171717] border-white/[0.06]',
        border: 'border-white/[0.06]',
        text: 'text-white',
        muted: 'text-[#A1A1AA]',
        input: 'bg-[#171717] border-white/[0.06]',
      }
    : {
        shell: 'bg-[#F7F7F7]',
        sidebar: 'bg-white border-[#E8E8E8]',
        header: 'bg-[#F7F7F7] border-[#E8E8E8]',
        card: 'bg-white border-[#E8E8E8]',
        border: 'border-[#E8E8E8]',
        text: 'text-[#111111]',
        muted: 'text-[#666666]',
        input: 'bg-white border-[#E8E8E8]',
      }
  const navMuted = isDark ? '#A1A1AA' : '#666666'

  return (
    <div className={`flex w-full overflow-hidden rounded-[22px] border ${palette.border} ${palette.shell} shadow-2xl`}>
      {/* Sidebar */}
      <aside className={`hidden w-[220px] shrink-0 flex-col border-r ${palette.sidebar} md:flex`}>
        <div className={`flex h-[70px] items-center gap-3 border-b px-5 ${palette.border}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            TS
          </span>
          <span className="font-geist text-lg font-semibold">
            <span className={palette.text}>TradeSift</span>
            <span className="text-brand">.ai</span>
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-hidden p-4">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium ${
                item.active ? 'bg-brand/10 text-brand' : `${palette.muted}`
              }`}
            >
              <Icon>{item.icon(item.active ? '#F2902F' : navMuted)}</Icon>
              <span className="flex-1 text-left">{item.label}</span>
              {item.active && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
            </div>
          ))}
          <div className={`my-3 h-px w-full ${isDark ? 'bg-white/[0.06]' : 'bg-[#E8E8E8]'}`} />
          {SECONDARY_ITEMS.map((item) => (
            <div key={item.label} className={`relative flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium ${palette.muted}`}>
              <span className="relative shrink-0">
                <Icon>{item.icon(navMuted)}</Icon>
                {item.badge && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </span>
              {item.label}
            </div>
          ))}
        </nav>

        <div className={`flex items-center gap-3 border-t px-5 py-4 ${palette.border}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand">
            KA
          </span>
          <div className="flex flex-col overflow-hidden">
            <span className={`truncate text-sm font-medium ${palette.text}`}>Kamran Aslam</span>
            <span className={`truncate text-xs ${palette.muted}`}>Senior Customs Broker</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className={`flex h-[70px] items-center justify-between gap-4 border-b px-5 ${palette.header} ${palette.border}`}>
          <div className="hidden items-center gap-2 text-sm sm:flex">
            <span className={palette.muted}>TradeSift</span>
            <span className={`${palette.muted} opacity-40`}>/</span>
            <span className={`font-medium ${palette.text}`}>Dashboard</span>
          </div>
          <div className={`flex h-10 flex-1 max-w-[280px] items-center gap-2 rounded-2xl border px-4 ${palette.input}`}>
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <circle cx="6.82" cy="6.82" r="4.96" stroke={navMuted} strokeWidth="1.24" />
              <path d="m13.02 13.02-2.67-2.67" stroke={navMuted} strokeWidth="1.24" strokeLinecap="round" />
            </svg>
            <span className={`truncate text-xs ${palette.muted}`}>Search invoices, shipments, tenders&hellip;</span>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <span className={`flex h-9 items-center gap-2 rounded-2xl border px-3 text-sm ${palette.border} ${palette.muted}`}>
              Activity
            </span>
            <span className={`flex h-9 items-center gap-2 rounded-2xl border px-3 text-sm ${palette.border} ${palette.text}`}>
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand/15 text-[11px] font-bold text-brand">
                PK
              </span>
              Karachi Customs
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-hidden p-6">
          <h3 className={`font-geist text-xl font-semibold sm:text-2xl ${palette.text}`}>Trade Operations Center</h3>
          <p className={`mt-1.5 max-w-xl text-sm sm:text-base ${palette.muted}`}>
            Monitor customs, finance, logistics and procurement operations from one intelligent platform.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className={`rounded-3xl border p-5 ${palette.card}`}>
                <div className="flex items-start justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.bg}`}>
                    <Icon viewBox="0 0 18 18">{stat.icon}</Icon>
                  </span>
                  <span className="rounded-full bg-[#00C950]/10 px-2.5 py-1 font-mono text-xs font-medium text-[#05DF72]">
                    {stat.change}
                  </span>
                </div>
                <p className={`mt-5 font-mono text-2xl font-bold sm:text-[27px] ${palette.text}`}>{stat.value}</p>
                <p className={`mt-1 text-xs sm:text-sm ${palette.muted}`}>{stat.label}</p>
                <svg width="90" height="30" viewBox="0 0 90 30" fill="none" className="mt-4">
                  <polyline points={stat.sparkline} stroke="#F2902F" strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
                </svg>
              </div>
            ))}
          </div>

          <div className={`mt-6 hidden overflow-hidden rounded-3xl border ${palette.card} lg:block`}>
            <div className={`flex items-center justify-between border-b px-6 py-5 ${palette.border}`}>
              <div>
                <h4 className={`font-geist text-lg font-semibold ${palette.text}`}>Recent Activities</h4>
                <p className={`mt-0.5 text-sm ${palette.muted}`}>Last 7 days across all modules</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-2xl border px-4 py-2 text-sm ${palette.border} ${palette.muted}`}>Filter</span>
                <span className={`rounded-2xl border px-4 py-2 text-sm ${palette.border} ${palette.muted}`}>Export</span>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className={`border-b text-xs uppercase tracking-widest ${palette.border} ${palette.muted}`}>
                  <th className="px-6 py-4 font-medium">Reference ID</th>
                  <th className="px-6 py-4 font-medium">Module</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.ref} className={`border-b last:border-0 ${isDark ? 'border-white/[0.03]' : 'border-[#E8E8E8]/50'}`}>
                    <td className={`px-6 py-4 font-mono text-sm font-medium ${palette.text}`}>{row.ref}</td>
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: row.color }}>
                      {row.module}
                    </td>
                    <td className={`px-6 py-4 font-mono text-sm ${palette.muted}`}>{row.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">
                          {initials(row.user)}
                        </span>
                        <span className={`text-sm ${palette.muted}`}>{row.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${row.statusBg}`}
                        style={{ color: row.statusColor }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: row.statusColor }} />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
