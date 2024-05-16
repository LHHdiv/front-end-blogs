<template><div><p>Tips: 课程考核目标</p>
<blockquote>
<p>识记：识别和记忆概念性内容，如各种数据库原理相关的术语、定义、特点、分类、组成、过程等。 ------ 20%占比</p>
</blockquote>
<blockquote>
<p>领会：领会数据库有关的基本概述和基本原理的内涵及外延，理解概念、原理的确切含义和适应条件，能够鉴别关于概念和原理的似是而非的说法。</p>
<p>----- 30%占比</p>
</blockquote>
<blockquote>
<p>简单应用：根据已知的数据库基本概念等基础知识，分析和解决问题。 ----- 30%占比</p>
</blockquote>
<blockquote>
<p>综合应用：能够综合运用数据库原理、方法、技术、分析或解决较为复杂的应用问题，如设计简单的数据库应用程序。 ------ 20%占比</p>
</blockquote>
<h2 id="数据库系统概述" tabindex="-1"><a class="header-anchor" href="#数据库系统概述" aria-hidden="true">#</a> 数据库系统概述</h2>
<h4 id="_1-数据-data" tabindex="-1"><a class="header-anchor" href="#_1-数据-data" aria-hidden="true">#</a> 1. 数据（data）</h4>
<blockquote>
<p>描述事物的符号记录，是指用物理符号记录下来的、可以鉴别的信息。</p>
<p>可以是包括数字、字母、文字、特殊字符组成的文本数据，也可以是图形、图像、动画、影像、声音、语言等多媒体数据。</p>
</blockquote>
<h4 id="_2-数据库-database-db" tabindex="-1"><a class="header-anchor" href="#_2-数据库-database-db" aria-hidden="true">#</a> 2. 数据库（Database, DB）</h4>
<blockquote>
<p>存储数据的仓库，<font color="red">是长期存储在计算机中的有组织、可共享的数据集合</font></p>
</blockquote>
<blockquote>
<p>数据库中存储的数据具有<font color="red">永久存储、有组织、可共享</font>三个基本特点</p>
</blockquote>
<h4 id="_3-数据库管理系统-database-management-system-dbms" tabindex="-1"><a class="header-anchor" href="#_3-数据库管理系统-database-management-system-dbms" aria-hidden="true">#</a> 3. 数据库管理系统（Database Management System, DBMS）</h4>
<blockquote>
<p>专门用于建立和管理数据库的一套软件，介于应用程序和操作系统之间</p>
</blockquote>
<h4 id="_4-数据库管理系统的主要功能" tabindex="-1"><a class="header-anchor" href="#_4-数据库管理系统的主要功能" aria-hidden="true">#</a> 4. 数据库管理系统的主要功能</h4>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">数据定义：</td>
<td>提供数据定义语言 DDL，定义数据库中的数据对象，包括表、视图、存储过程、触发器等等</td>
</tr>
<tr>
<td style="text-align:left">数据操作：</td>
<td>提供数据操作语言 DML，实现对数据库的基本操作，包括数据查询、插入、删除、修改等等</td>
</tr>
<tr>
<td style="text-align:left">数据库的运行管理：</td>
<td>提供统一的控制和管理机制，确保多个用户能并发使用共享数据，保证数据的安全性、可靠性以及发生故障时能进行正确的恢复</td>
</tr>
</tbody>
</table>
<h4 id="_5-数据库系统-database-system-dbs" tabindex="-1"><a class="header-anchor" href="#_5-数据库系统-database-system-dbs" aria-hidden="true">#</a> 5. 数据库系统（Database System, DBS）</h4>
<blockquote>
<p>数据库系统是指在计算机中引入数据库技术之后的系统。</p>
<p>包括：数据库、数据库管理系统及相关使用工具、应用程序、数据库管理员和用户</p>
</blockquote>
<h3 id="_6-数据库管理员-database-administrator-dba" tabindex="-1"><a class="header-anchor" href="#_6-数据库管理员-database-administrator-dba" aria-hidden="true">#</a> 6. 数据库管理员（Database Administrator, DBA）</h3>
<blockquote>
<p>DBA 专门负责对数据库进行维护，并保证数据库正常、高效运行的人员</p>
</blockquote>
<h2 id="数据管理技术的发展" tabindex="-1"><a class="header-anchor" href="#数据管理技术的发展" aria-hidden="true">#</a> 数据管理技术的发展</h2>
<h4 id="_1-数据管理的任务" tabindex="-1"><a class="header-anchor" href="#_1-数据管理的任务" aria-hidden="true">#</a> 1. 数据管理的任务</h4>
<blockquote>
<p>进行数据收集、组织、控制、存储、选取、维护，是数据处理的中心问题</p>
</blockquote>
<h4 id="_2-数据管理技术经历的三个阶段" tabindex="-1"><a class="header-anchor" href="#_2-数据管理技术经历的三个阶段" aria-hidden="true">#</a> 2. 数据管理技术经历的三个阶段</h4>
<ul>
<li>人工管理阶段（40 年代--50 年代中）
<ul>
<li>a) 数据不保存</li>
<li>b) 应用程序管理数据</li>
<li>c) 数据面向应用</li>
</ul>
</li>
<li>文件系统阶段（50 年代末--60 年代中）
<ul>
<li>a) 数据可以长期保存</li>
<li>b) 提供了物理数据独立性，使应用程序与数据的具体物理存储结构分析</li>
<li>c) 不能实现数据的普通共享，只能实现文件级的共享，而不能在记录或数据项级实现数据的共享</li>
<li>d) 文件的逻辑结构是根据它的应用而设计的，数据的逻辑结构与应用程序之间相互依赖</li>
<li>e) 存在大量的数据冗余</li>
</ul>
</li>
<li>数据库系统阶段（60 年代末--现在）
<ul>
<li>a) 数据集成</li>
<li>b) 数据共享性高</li>
<li>c) 数据冗余小</li>
<li>d) 数据一致性</li>
<li>e) 数据独立性高</li>
<li>f) 实现统一管理与控制</li>
<li>g) 减少应用程序开发与维护的工作量</li>
</ul>
</li>
</ul>
<blockquote>
<p>🔴 <font color="#EF7060">引起数据不一致的根源：数据冗余</font></p>
</blockquote>
<blockquote>
<p>❓ 【真题】什么是数据库的故障恢复：DBMS 必须具有将数据库从错误状态恢复到某一已知的正确状态的功能</p>
</blockquote>
<h4 id="_3-数据管理的三个阶段比较" tabindex="-1"><a class="header-anchor" href="#_3-数据管理的三个阶段比较" aria-hidden="true">#</a> 3. 数据管理的三个阶段比较</h4>
<table>
<thead>
<tr>
<th>/</th>
<th>人工管理</th>
<th>文件系统</th>
<th>数据库系统</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据共享程度</td>
<td>无共享、冗余度大</td>
<td>共享性差、冗余度大</td>
<td>共享性大、冗余度小</td>
</tr>
<tr>
<td>数据独立性</td>
<td>不独立，完全依赖于程序</td>
<td>独立性差</td>
<td>具有高度的物理独立性和一定的逻辑独立性</td>
</tr>
<tr>
<td>数据控制能力</td>
<td>应用程序自己控制</td>
<td>应用程序自己控制</td>
<td>由 DBMS 提供数据安全性、完整性、并发控制和恢复</td>
</tr>
</tbody>
</table>
</div></template>


