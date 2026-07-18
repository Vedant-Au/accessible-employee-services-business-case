// GlobalTech remediated intranet — WCAG 2.2 AA rebuild of the four production
// surfaces (Homepage, Company intranet, Technology support, Training) with the
// REAL content from the audit screenshots, rebuilt on semantic HTML using the
// GlobalTech Accessible DS component library. Mounted by the .dc.html via x-import.
const NS = () => window.GlobalTechAccessibleDS_ff3d6f;
const TAGLINE = "Connecting people, powering innovation.";

/* =================================================================== shell */
const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home", icon: "home" },
  { id: "intranet", label: "Company intranet", href: "#intranet", icon: "home" },
  { id: "hr", label: "HR resources", href: "#hr", icon: "user" },
  { id: "training", label: "Learning & training", href: "#training", icon: "book" },
  { id: "support", label: "Technology support", href: "#support", icon: "laptop" },
];

function Shell({ current, onNavigate, children }) {
  const { TopNav, SkipLink, Button } = NS();
  return (
    <div style={{ minHeight: "100%", background: "var(--surface-page)", display: "flex", flexDirection: "column" }}>
      <SkipLink targetId="main-content" />
      <TopNav
        brand="GlobalTech"
        current={current}
        items={NAV_ITEMS}
        onNavigate={onNavigate}
        actions={
          <Button variant="secondary" iconLeft="user" onClick={() => onNavigate("home")}>
            John Smith
          </Button>
        }
      />
      {children}
      <footer style={{ marginTop: "auto", background: "var(--color-surface-alt)", borderTop: "var(--border-width) solid var(--color-border)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter)", display: "flex", flexWrap: "wrap", gap: "var(--space-6)", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-small-size)", color: "var(--text-muted)" }}>
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: 600, color: "var(--text-body)" }}>GlobalTech — {TAGLINE}</p>
            <p style={{ margin: 0 }}>© 2026 GlobalTech Corporation. Internal use only.</p>
          </div>
          <nav aria-label="Footer">
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", listStyle: "none", margin: 0, padding: 0 }}>
              <li><a href="#">Accessibility statement</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function Main({ children, wide }) {
  return (
    <main id="main-content" tabIndex={-1} style={{ outline: "none", maxWidth: "var(--layout-max)", margin: "0 auto", width: "100%", boxSizing: "border-box", padding: "var(--space-8) var(--layout-gutter)", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
      {children}
    </main>
  );
}

/* ============================================================ shared widgets */

// Accessible site search — replaces the header search that was not keyboard
// reachable and had no associated label.
function SiteSearch({ label, placeholder, id }) {
  const { Button, Icon } = NS();
  return (
    <form role="search" aria-label={label} onSubmit={(e) => e.preventDefault()}
      style={{ background: "var(--surface-card)", border: "var(--border-width) solid var(--border-divider)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
      <label htmlFor={id} style={{ display: "block", fontSize: "var(--text-label-size)", fontWeight: 600, marginBottom: "var(--space-2)" }}>{label}</label>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        <div style={{ position: "relative", flex: 1, minWidth: "220px", display: "flex" }}>
          <Icon name="search" size={20} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
          <input id={id} type="search" placeholder={placeholder}
            style={{ width: "100%", minHeight: "var(--control-height)", padding: "0 var(--space-3) 0 40px", fontSize: "var(--text-body-size)", border: "var(--border-width-strong) solid var(--border-field)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", boxSizing: "border-box" }} />
        </div>
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

// Semantic panel with a heading — replaces the coloured <td> "widgets".
function Panel({ id, title, titleAs = "h2", children, style }) {
  const H = titleAs;
  return (
    <section aria-labelledby={id} style={{ background: "var(--surface-card)", border: "var(--border-width) solid var(--border-divider)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)", ...style }}>
      <H id={id} style={{ marginTop: 0, marginBottom: "var(--space-4)", fontSize: "var(--text-h3-size)" }}>{title}</H>
      {children}
    </section>
  );
}

// Descriptive link list — replaces "Click Here / More Info / Stuff / Other Links".
function LinkList({ links }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {links.map((l, i) => (
        <li key={i}>
          <a href="#" style={{ display: "block", padding: "10px var(--space-2)", minHeight: "44px", boxSizing: "border-box" }}>
            {l.label}
            {l.desc ? <span style={{ display: "block", fontSize: "var(--text-small-size)", color: "var(--text-muted)", fontWeight: 400 }}>{l.desc}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

// System / service status — icon + text status word + colour (never colour alone).
function StatusList({ items }) {
  const { Badge } = NS();
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-2) 0", borderTop: i ? "var(--border-width) solid var(--border-divider)" : "none" }}>
          <span style={{ fontWeight: 600 }}>{it.label}</span>
          <Badge tone={it.tone}>{it.value}</Badge>
        </li>
      ))}
    </ul>
  );
}

// Semantic data table with caption + scoped headers — replaces layout tables.
function DataTable({ caption, columns, rows, renderCell }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--text-body-size)" }}>
        <caption style={{ textAlign: "left", captionSide: "top", fontWeight: 700, marginBottom: "var(--space-3)", fontSize: "var(--text-h3-size)" }}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} scope="col" style={{ textAlign: "left", padding: "var(--space-3) var(--space-4)", borderBottom: "2px solid var(--border-field)", background: "var(--color-surface-alt)", whiteSpace: "nowrap" }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {columns.map((c, ci) => (
                <td key={c.key} {...(ci === 0 ? { scope: "row" } : {})} style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "var(--border-width) solid var(--border-divider)", verticalAlign: "middle" }}>
                  {renderCell ? renderCell(c.key, r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Accessible poll — fieldset/legend + radios + submit; replaces loose radios.
function Poll({ id, legend, options }) {
  const { Fieldset, Radio, Button, Link, Alert } = NS();
  const [val, setVal] = React.useState("");
  const [done, setDone] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (val) setDone(true); };
  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {done ? <Alert tone="success" title="Thanks for your feedback">Your response has been recorded.</Alert> : null}
      <Fieldset legend={legend}>
        {options.map((o) => (
          <Radio key={o} name={id} value={o} label={o} checked={val === o} onChange={() => setVal(o)} />
        ))}
      </Fieldset>
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Button type="submit">Submit vote</Button>
        <Link href="#">View results</Link>
      </div>
    </form>
  );
}

/* ================================================================= homepage */
function HomePage({ onNavigate }) {
  const { Card } = NS();
  const services = [
    { id: "intranet", icon: "home", title: "Company intranet", body: "Access company news, policies and collaboration tools.", cta: "Open the intranet" },
    { id: "hr", icon: "user", title: "HR resources", body: "Benefits, payroll, leave management and employee services.", cta: "Open HR resources" },
    { id: "training", icon: "book", title: "Internal learning & training", body: "Courses, certifications and career development.", cta: "Start learning" },
    { id: "support", icon: "laptop", title: "Technology support", body: "IT support, service requests and knowledge articles.", cta: "Get support" },
  ];
  return (
    <Shell current="home" onNavigate={onNavigate}>
      <Main>
        <header>
          <p style={{ margin: "0 0 var(--space-2)", fontSize: "var(--text-small-size)", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--text-muted)" }}>Employee portal</p>
          <h1 style={{ margin: "0 0 var(--space-3)" }}>Welcome to GlobalTech</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lead-size)", color: "var(--text-body)", maxWidth: "42rem" }}>
            Your gateway to corporate resources, learning and support services.
          </p>
        </header>

        <SiteSearch id="home-search" label="Search GlobalTech" placeholder="People, policies, apps…" />

        <section aria-labelledby="services-heading">
          <h2 id="services-heading">Your services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "var(--space-4)" }}>
            {services.map((s) => (
              <Card key={s.id} title={s.title} titleAs="h3" icon={s.icon} href="#"
                onClick={(e) => { e.preventDefault(); onNavigate(s.id); }}
                footer={<span style={{ fontWeight: 600 }}>{s.cta}</span>}>
                {s.body}
              </Card>
            ))}
          </div>
        </section>
      </Main>
    </Shell>
  );
}

/* ========================================================= company intranet */
function Intranet({ onNavigate }) {
  const { Alert, Link, Select, TextInput, Fieldset, Radio, Button } = NS();

  const quickLinks = [
    { label: "Company news", desc: "Latest announcements and updates" },
    { label: "IT policies", desc: "Acceptable use, security and device rules" },
    { label: "HR policies", desc: "Leave, benefits and conduct" },
    { label: "Submit a request", desc: "Raise an HR, IT or facilities request" },
    { label: "People finder", desc: "Search the employee directory" },
    { label: "Facilities booking", desc: "Rooms, desks and equipment" },
    { label: "Employee handbook", desc: "Policies and how we work" },
    { label: "All applications A–Z", desc: "Every GlobalTech tool" },
  ];
  const tools = [
    { label: "Email" }, { label: "Calendar" }, { label: "Timesheet" }, { label: "Expense claim" },
    { label: "IT support" }, { label: "HR portal" }, { label: "Learning centre" }, { label: "Admin centre" },
  ];
  const news = [
    "New office opened in Singapore",
    "Reminder: update your profile",
    "Try the new GlobalTech mobile app",
    "Safety is everyone's responsibility — read the guidance",
    "GlobalTech Q3 results — view the presentation",
  ];
  const status = [
    { label: "Email system", value: "Down", tone: "error" },
    { label: "HR system", value: "Intermittent", tone: "warning" },
    { label: "Finance system", value: "Operational", tone: "success" },
  ];
  const events = [
    { date: "20 May", event: "Town hall meeting", location: "New York" },
    { date: "25 May", event: "Leadership webinar", location: "Online" },
    { date: "1 Jun", event: "Health & wellness fair", location: "London" },
    { date: "10 Jun", event: "Project Phoenix kickoff", location: "Singapore" },
  ];

  return (
    <Shell current="intranet" onNavigate={onNavigate}>
      <Main>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Alert tone="warning" title="New global IT policy — action required" onDismiss={() => {}}>
            All employees must read the updated global IT policy. <Link href="#">Read the policy</Link>.
          </Alert>
          <Alert tone="info" title="Planned maintenance this Friday" onDismiss={() => {}}>
            Systems will be unavailable Friday 23:00–03:00 while we carry out maintenance.
          </Alert>
        </div>

        <header>
          <h1 style={{ margin: "0 0 var(--space-3)" }}>Company intranet</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lead-size)", color: "var(--text-body)", maxWidth: "42rem" }}>
            One place for company information, news, resources and applications.
          </p>
        </header>

        <SiteSearch id="intranet-search" label="Search the intranet" placeholder="People, policies, apps…" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-6)", alignItems: "start" }}>
          <Panel id="quicklinks-heading" title="Quick links">
            <LinkList links={quickLinks} />
          </Panel>

          <Panel id="news-heading" title="Company news">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {news.map((n, i) => (
                <li key={i} style={{ paddingBottom: "var(--space-3)", borderBottom: i < news.length - 1 ? "var(--border-width) solid var(--border-divider)" : "none" }}>
                  <a href="#">{n}</a>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel id="tools-heading" title="My tools">
            <LinkList links={tools} />
          </Panel>

          <Panel id="status-heading" title="System status">
            <StatusList items={status} />
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">View detailed system status</Link></p>
          </Panel>

          <Panel id="directory-heading" title="Employee directory">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <TextInput label="First name" id="dir-first" />
              <TextInput label="Last name" id="dir-last" />
              <Select label="Location" id="dir-loc" value="all" onChange={() => {}}
                options={[{ value: "all", label: "All locations" }, { value: "ny", label: "New York" }, { value: "ldn", label: "London" }, { value: "sg", label: "Singapore" }]} />
              <div><Button type="submit" iconLeft="search">Search directory</Button></div>
            </form>
          </Panel>

          <Panel id="events-heading" title="Upcoming events">
            <DataTable caption="Upcoming events" columns={[{ key: "date", label: "Date" }, { key: "event", label: "Event" }, { key: "location", label: "Location" }]} rows={events} />
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">See all events</Link></p>
          </Panel>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "var(--space-6)", alignItems: "start" }}>
          <Panel id="request-heading" title="Submit a request">
            <RequestForm />
          </Panel>
          <Panel id="poll-heading" title="Quick poll">
            <Poll id="intranet-poll" legend="How was your experience with the new system?" options={["Very good", "Good", "Okay", "Bad", "Very bad"]} />
          </Panel>
        </div>

        <Alert tone="warning" title="Mandatory compliance training">
          All employees must complete the mandatory compliance training. <Link href="#">Start the training</Link>.
        </Alert>
      </Main>
    </Shell>
  );
}

// Shared request form used by the intranet ("Submit a request") — one of the
// two flows flagged in the HR harm report, so validation + error summary matter.
function RequestForm() {
  const { Select, TextInput, Button, Alert } = NS();
  const [type, setType] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [priority, setPriority] = React.useState("normal");
  const [errors, setErrors] = React.useState({});
  const [done, setDone] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!type) errs.type = "Choose a type of request";
    if (!desc.trim()) errs.desc = "Describe what you need";
    setErrors(errs);
    setDone(Object.keys(errs).length === 0);
  };
  const count = Object.keys(errors).length;
  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {done ? <Alert tone="success" title="Request submitted">Reference REQ-20418 — the relevant team will respond within 2 business days.</Alert> : null}
      {!done && count ? (
        <Alert tone="error" title={`There ${count === 1 ? "is 1 problem" : `are ${count} problems`} with your request`}>Review the highlighted fields below.</Alert>
      ) : null}
      <Select label="Type of request" required placeholder="Choose a type" value={type} onChange={(e) => setType(e.target.value)} error={errors.type}
        options={[{ value: "hr", label: "HR & payroll" }, { value: "it", label: "IT & equipment" }, { value: "facilities", label: "Facilities" }, { value: "access", label: "Access & accounts" }, { value: "other", label: "Something else" }]} />
      <TextInput label="Description" required value={desc} onChange={(e) => setDesc(e.target.value)} error={errors.desc} help="Tell us what you need in a sentence or two" />
      <Select label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)}
        options={[{ value: "low", label: "Low — no rush" }, { value: "normal", label: "Normal" }, { value: "high", label: "High — blocking my work" }]} />
      <div style={{ display: "flex", gap: "var(--space-3)" }}>
        <Button type="submit">Submit request</Button>
        <Button type="reset" variant="text" onClick={() => { setType(""); setDesc(""); setPriority("normal"); setErrors({}); setDone(false); }}>Clear form</Button>
      </div>
    </form>
  );
}

/* ========================================================= technology support */
function Support({ onNavigate }) {
  const { Alert, Link, Select, TextInput, Button } = NS();

  const helpTopics = [
    { label: "Report an issue", icon: "alert-triangle" },
    { label: "Request access", icon: "lock" },
    { label: "Reset your password", icon: "lock" },
    { label: "Hardware support", icon: "laptop" },
    { label: "Software & apps", icon: "settings" },
    { label: "Network & VPN", icon: "settings" },
    { label: "Email & Outlook", icon: "mail" },
    { label: "Telephony", icon: "bell" },
    { label: "Other requests", icon: "file" },
  ];
  const service = [
    { label: "Email / Outlook", value: "Operational", tone: "success" },
    { label: "VPN", value: "Degraded", tone: "warning" },
    { label: "Teams", value: "Operational", tone: "success" },
    { label: "SharePoint", value: "Operational", tone: "success" },
    { label: "Phones", value: "Operational", tone: "success" },
  ];
  const resources = [
    { label: "Reset your GlobalTech password" },
    { label: "Set up multi-factor authentication" },
    { label: "Connect to the VPN" },
    { label: "Install Microsoft 365 apps" },
    { label: "Set up Outlook on mobile" },
  ];
  const announcements = [
    { text: "New GlobalTech VPN client available", date: "24 May 2024" },
    { text: "Outlook slow performance — known issue", date: "22 May 2024" },
    { text: "Microsoft Teams update — action required", date: "20 May 2024" },
  ];

  return (
    <Shell current="support" onNavigate={onNavigate}>
      <Main>
        <header>
          <h1 style={{ margin: "0 0 var(--space-3)" }}>Technology support</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lead-size)", color: "var(--text-body)", maxWidth: "42rem" }}>
            Technical support — we're here to help. Raise a ticket, check its status or find a quick answer.
          </p>
        </header>

        <SiteSearch id="support-search" label="Search technical support" placeholder="Search knowledge base and guides…" />

        <Alert tone="info" title="Planned system maintenance" onDismiss={() => {}}>
          Maintenance is scheduled for Saturday 1 June, 23:00–03:00 (GMT). Some services may be unavailable. <Link href="#">Read the details</Link>.
        </Alert>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-6)", alignItems: "start" }}>
          <Panel id="help-heading" title="What do you need help with?">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
              {helpTopics.map((t, i) => {
                const { Icon } = NS();
                return (
                  <li key={i}>
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px var(--space-2)", minHeight: "44px", boxSizing: "border-box" }}>
                      <Icon name={t.icon} size={20} /> {t.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Panel>

          <Panel id="ticket-heading" title="Submit a support ticket">
            <p style={{ marginTop: 0, color: "var(--text-muted)" }}>Tell us what you need help with.</p>
            <TicketForm />
          </Panel>

          <Panel id="check-heading" title="Check an existing ticket">
            <CheckTicketForm />
          </Panel>

          <Panel id="service-heading" title="Service status">
            <StatusList items={service} />
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">View all service status</Link></p>
          </Panel>

          <Panel id="resources-heading" title="Popular resources">
            <LinkList links={resources} />
            <p style={{ margin: "var(--space-2) 0 0" }}><Link href="#">More guides</Link></p>
          </Panel>

          <Panel id="hours-heading" title="Support hours & contact">
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-2) var(--space-4)" }}>
              <dt style={{ fontWeight: 600 }}>Mon–Fri</dt><dd style={{ margin: 0 }}>08:00–18:00 (local time)</dd>
              <dt style={{ fontWeight: 600 }}>Sat–Sun</dt><dd style={{ margin: 0 }}>Closed</dd>
            </dl>
            <p style={{ margin: "var(--space-4) 0 var(--space-2)" }}>
              Urgent help: call the service desk on <a href="tel:+18005550199" style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>+1 800 555 0199</a>.
            </p>
            <p style={{ margin: 0 }}><Link href="#">View global office hours</Link> · <Link href="#">Email the team</Link></p>
          </Panel>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-6)", alignItems: "start" }}>
          <Panel id="announce-heading" title="Recent announcements">
            <DataTable caption="Recent announcements" columns={[{ key: "text", label: "Announcement" }, { key: "date", label: "Date" }]} rows={announcements} />
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">See all announcements</Link></p>
          </Panel>
          <Panel id="supportpoll-heading" title="Quick poll">
            <Poll id="support-poll" legend="How easy was it to find what you needed?" options={["Very easy", "Easy", "Difficult", "Very difficult"]} />
          </Panel>
        </div>
      </Main>
    </Shell>
  );
}

function TicketForm() {
  const { Select, TextInput, Button, Alert } = NS();
  const [cat, setCat] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [done, setDone] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!cat) errs.cat = "Choose a category";
    if (!summary.trim()) errs.summary = "Describe the issue in a few words";
    setErrors(errs);
    setDone(Object.keys(errs).length === 0);
  };
  const count = Object.keys(errors).length;
  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {done ? <Alert tone="success" title="Ticket raised">Reference TICKET-4839 — the service desk will respond within 4 business hours.</Alert> : null}
      {!done && count ? <Alert tone="error" title={`There ${count === 1 ? "is 1 problem" : `are ${count} problems`} with your ticket`}>Review the highlighted fields below.</Alert> : null}
      <Select label="Category" required placeholder="Choose a category" value={cat} onChange={(e) => setCat(e.target.value)} error={errors.cat}
        options={["Hardware", "Software & apps", "Network & VPN", "Email & Outlook", "Accounts & access", "Something else"]} />
      <TextInput label="Description" required value={summary} onChange={(e) => setSummary(e.target.value)} error={errors.summary} help="e.g. “VPN disconnects on office Wi-Fi”" />
      <div style={{ display: "flex", gap: "var(--space-3)" }}>
        <Button type="submit" iconLeft="ticket">Submit ticket</Button>
        <Button type="reset" variant="text" onClick={() => { setCat(""); setSummary(""); setErrors({}); setDone(false); }}>Clear form</Button>
      </div>
    </form>
  );
}

function CheckTicketForm() {
  const { TextInput, Button, Link } = NS();
  const [num, setNum] = React.useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <p style={{ marginTop: 0, color: "var(--text-muted)" }}>Enter your ticket number to see its status.</p>
      <TextInput label="Ticket number" value={num} onChange={(e) => setNum(e.target.value)} help="For example TICKET-4821" placeholder="TICKET-0000" />
      <div><Button type="submit">Check status</Button></div>
      <p style={{ margin: 0 }}>Don't know your ticket number? <Link href="#">Search by email</Link>.</p>
    </form>
  );
}

/* ================================================================= training */
function Training({ onNavigate }) {
  const { Alert, Link, Badge, Button, Select } = NS();

  const menu = [
    { label: "My learning", desc: "Your courses and progress" },
    { label: "Mandatory training", desc: "Compliance you must complete" },
    { label: "Course catalogue", desc: "Browse all available courses" },
    { label: "Leadership development", desc: "Programmes for managers" },
    { label: "Compliance & ethics", desc: "Policy and conduct training" },
    { label: "IT training", desc: "Tools and technical skills" },
    { label: "Soft skills", desc: "Communication and collaboration" },
    { label: "Onboarding", desc: "New-joiner learning path" },
    { label: "Learning history", desc: "Courses you've completed" },
  ];
  const assigned = [
    { title: "GlobalTech code of conduct", type: "Mandatory", due: "31 May 2024", status: "Not started", tone: "warning" },
    { title: "Data security awareness", type: "Mandatory", due: "15 Jun 2024", status: "In progress", tone: "info" },
    { title: "Harassment prevention", type: "Mandatory", due: "30 Jun 2024", status: "Not started", tone: "warning" },
    { title: "Customer service excellence", type: "Recommended", due: "No due date", status: "Not started", tone: "neutral" },
  ];
  const statusRows = [
    { label: "Total courses", value: "23" },
    { label: "Completed", value: "5" },
    { label: "In progress", value: "3" },
    { label: "Not started", value: "15" },
  ];
  const announcements = [
    "New course catalogue now available",
    "System maintenance on Saturday, 23:00–03:00 (EST)",
    "Complete your Q2 compliance training",
  ];
  const resourceLinks = [
    { label: "How to use this site (PDF)" },
    { label: "Training FAQ" },
    { label: "Learner guides" },
    { label: "System requirements" },
    { label: "Supported browsers" },
  ];

  return (
    <Shell current="training" onNavigate={onNavigate}>
      <Main>
        <Alert tone="warning" title="Mandatory training due Friday" onDismiss={() => {}}>
          Please complete your assigned mandatory training by Friday. <Link href="#">Go to your assigned training</Link>.
        </Alert>

        <header>
          <h1 style={{ margin: "0 0 var(--space-3)" }}>Learning & training</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lead-size)", color: "var(--text-body)", maxWidth: "42rem" }}>
            GlobalTech is committed to your growth. Explore courses and take charge of your development.
          </p>
        </header>

        <SiteSearch id="training-search" label="Search training" placeholder="Search courses and topics…" />

        <style>{`
          .gt-training-grid { display: grid; grid-template-columns: minmax(0,2.2fr) minmax(260px,1fr); gap: var(--space-8); align-items: start; }
          @media (max-width: 900px) { .gt-training-grid { grid-template-columns: 1fr; } }
        `}</style>
        <div className="gt-training-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            <section aria-labelledby="assigned-heading" style={{ background: "var(--surface-card)", border: "var(--border-width) solid var(--border-divider)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
              <DataTable
                caption="My assigned training"
                columns={[{ key: "title", label: "Course" }, { key: "type", label: "Type" }, { key: "due", label: "Due date" }, { key: "status", label: "Status" }]}
                rows={assigned}
                renderCell={(key, r) => {
                  if (key === "title") return <a href="#" style={{ fontWeight: 600 }}>{r.title}</a>;
                  if (key === "status") return <Badge tone={r.tone}>{r.status}</Badge>;
                  return r[key];
                }}
              />
              <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">Go to my learning plan</Link></p>
            </section>

            <Panel id="browse-heading" title="Browse courses by category">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-end", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "220px" }}>
                  <Select label="Category" value="" placeholder="Select a category" onChange={() => {}}
                    options={["Leadership", "Technical", "Compliance", "Communication", "Cyber security", "Diversity & inclusion"]} />
                </div>
                <Button type="submit">Browse</Button>
              </form>
              <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-small-size)", color: "var(--text-muted)" }}>Popular searches:</p>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-4)", listStyle: "none", margin: "var(--space-1) 0 0", padding: 0 }}>
                {["Excel", "Project management", "Communication", "Cyber security", "Diversity & inclusion"].map((t) => (
                  <li key={t}><a href="#">{t}</a></li>
                ))}
              </ul>
            </Panel>

            <Panel id="lmenu-heading" title="Learning menu">
              <LinkList links={menu} />
            </Panel>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Panel id="tstatus-heading" title="My training status" titleAs="h2">
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-2) var(--space-4)" }}>
                {statusRows.map((s) => (
                  <React.Fragment key={s.label}>
                    <dt style={{ color: "var(--text-muted)" }}>{s.label}</dt>
                    <dd style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{s.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">View full report</Link></p>
            </Panel>

            <Panel id="featured-heading" title="Featured course" titleAs="h2">
              <div role="img" aria-label="Course thumbnail placeholder" style={{ height: "120px", borderRadius: "var(--radius-md)", background: "repeating-linear-gradient(135deg, var(--color-surface-alt), var(--color-surface-alt) 10px, var(--color-surface-sunken) 10px, var(--color-surface-sunken) 20px)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "var(--text-small-size)", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                course image
              </div>
              <h3 style={{ margin: "0 0 var(--space-2)" }}>Leading in a hybrid world</h3>
              <p style={{ margin: "0 0 var(--space-4)", color: "var(--text-body)" }}>A new programme for managers leading distributed teams.</p>
              <Button onClick={() => {}}>Start the course</Button>
            </Panel>

            <Panel id="reminders-heading" title="Important reminders" titleAs="h2">
              <ul style={{ margin: 0, paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <li>Complete all assigned training on time.</li>
                <li>Check your email for new assignments.</li>
                <li>Keep your compliance training up to date.</li>
              </ul>
              <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">Read more</Link></p>
            </Panel>

            <Panel id="announce-t-heading" title="Announcements" titleAs="h2">
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {announcements.map((a, i) => (
                  <li key={i} style={{ display: "flex", gap: "var(--space-2)" }}>
                    <NS_Icon name="bell" /> <a href="#">{a}</a>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel id="tresources-heading" title="Learning resources" titleAs="h2">
              <LinkList links={resourceLinks} />
            </Panel>

            <Panel id="connect-heading" title="Stay connected" titleAs="h2">
              <p style={{ marginTop: 0, color: "var(--text-body)" }}>Follow us for learning tips and updates.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <li><Link href="#" external>GlobalTech Learning on LinkedIn</Link></li>
                <li><Link href="#" external>GlobalTech Learning on YouTube</Link></li>
                <li><Link href="#" external>GlobalTech Learning on Facebook</Link></li>
                <li><Link href="#" external>GlobalTech Learning on X</Link></li>
              </ul>
            </Panel>

            <Panel id="tpoll-heading" title="Poll" titleAs="h2">
              <Poll id="training-poll" legend="What type of training do you want more of?" options={["Leadership", "Technical", "Compliance", "Communication", "Other"]} />
            </Panel>
          </div>
        </div>
      </Main>
    </Shell>
  );
}

// Small icon helper so training announcement icons resolve after the bundle loads.
function NS_Icon({ name }) {
  const ns = NS();
  if (!ns) return null;
  const { Icon } = ns;
  return <Icon name={name} size={18} style={{ color: "var(--text-muted)", flex: "0 0 auto", marginTop: "2px" }} />;
}

/* ================================================================= HR resources */
function HR({ onNavigate }) {
  const { Alert, Link, Badge } = NS();

  const quickTasks = [
    { label: "Book annual leave", desc: "Request and track time off" },
    { label: "View your payslips", desc: "Payslips and P60s" },
    { label: "Update personal details", desc: "Address, bank and emergency contacts" },
    { label: "Benefits enrolment", desc: "Pension, health and lifestyle benefits" },
    { label: "Performance & goals", desc: "Reviews, objectives and feedback" },
    { label: "Report absence", desc: "Log sickness or other absence" },
  ];
  const policies = [
    { label: "Employee handbook" },
    { label: "Leave & holiday policy" },
    { label: "Code of conduct" },
    { label: "Family & parental leave" },
    { label: "Expenses policy" },
    { label: "Grievance & complaints procedure" },
  ];
  const balances = [
    { label: "Annual leave", value: "12 of 25 days" },
    { label: "Carried over", value: "3 days" },
    { label: "Sick leave taken", value: "2 days" },
  ];
  const tasks = [
    { task: "Confirm pension contribution", due: "31 May 2024", status: "Action needed", tone: "warning" },
    { task: "Annual benefits review", due: "15 Jun 2024", status: "Open", tone: "info" },
    { task: "Emergency contact check", due: "30 Jun 2024", status: "Open", tone: "info" },
  ];

  return (
    <Shell current="hr" onNavigate={onNavigate}>
      <Main>
        <header>
          <h1 style={{ margin: "0 0 var(--space-3)" }}>HR resources</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lead-size)", color: "var(--text-body)", maxWidth: "42rem" }}>
            Benefits, payroll, leave management and employee services — all in one place.
          </p>
        </header>

        <SiteSearch id="hr-search" label="Search HR resources" placeholder="Payslips, leave, benefits, policies…" />

        <Alert tone="info" title="Benefits enrolment window is open" onDismiss={() => {}}>
          Review and update your benefits before 30 June. <Link href="#">Start enrolment</Link>.
        </Alert>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-6)", alignItems: "start" }}>
          <Panel id="hrtasks-heading" title="Common tasks">
            <LinkList links={quickTasks} />
          </Panel>

          <Panel id="hraction-heading" title="Your HR to-dos">
            <DataTable
              caption="Your HR to-dos"
              columns={[{ key: "task", label: "Task" }, { key: "due", label: "Due date" }, { key: "status", label: "Status" }]}
              rows={tasks}
              renderCell={(key, r) => {
                if (key === "task") return <a href="#" style={{ fontWeight: 600 }}>{r.task}</a>;
                if (key === "status") return <Badge tone={r.tone}>{r.status}</Badge>;
                return r[key];
              }}
            />
          </Panel>

          <Panel id="hrleave-heading" title="Leave balance">
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-2) var(--space-4)" }}>
              {balances.map((b) => (
                <React.Fragment key={b.label}>
                  <dt style={{ color: "var(--text-muted)" }}>{b.label}</dt>
                  <dd style={{ margin: 0, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{b.value}</dd>
                </React.Fragment>
              ))}
            </dl>
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">Book annual leave</Link></p>
          </Panel>

          <Panel id="hrpolicies-heading" title="Policies & documents">
            <LinkList links={policies} />
          </Panel>

          <Panel id="hrcontact-heading" title="Contact the HR team">
            <p style={{ marginTop: 0, color: "var(--text-body)" }}>Can't find what you need? The HR service centre can help.</p>
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-2) var(--space-4)" }}>
              <dt style={{ fontWeight: 600 }}>Phone</dt>
              <dd style={{ margin: 0 }}><a href="tel:+18005550142" style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>+1 800 555 0142</a></dd>
              <dt style={{ fontWeight: 600 }}>Email</dt>
              <dd style={{ margin: 0 }}><a href="mailto:hr@globaltech.example">hr@globaltech.example</a></dd>
              <dt style={{ fontWeight: 600 }}>Hours</dt>
              <dd style={{ margin: 0 }}>Mon–Fri, 09:00–17:00 (local time)</dd>
            </dl>
            <p style={{ margin: "var(--space-4) 0 0" }}><Link href="#">Raise an HR request</Link></p>
          </Panel>
        </div>

        <Panel id="hrrequest-heading" title="Submit an HR request">
          <RequestForm />
        </Panel>
      </Main>
    </Shell>
  );
}

/* =================================================================== router */
const SCREENS = { home: HomePage, intranet: Intranet, support: Support, training: Training, hr: HR };

function RemediationApp() {
  const [ready, setReady] = React.useState(!!window.GlobalTechAccessibleDS_ff3d6f);
  const [route, setRoute] = React.useState("home");

  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.GlobalTechAccessibleDS_ff3d6f) { setReady(true); clearInterval(t); }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);

  React.useEffect(() => {
    if (!ready) return;
    const m = document.getElementById("main-content");
    if (m) m.focus();
  }, [route, ready]);

  if (!ready) return null;
  const Screen = SCREENS[route] || HomePage;
  return <Screen onNavigate={setRoute} />;
}

window.RemediationApp = RemediationApp;
if (typeof module !== "undefined") { module.exports = { RemediationApp }; }
