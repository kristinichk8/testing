PGDMP     7                    {         
   Valley-tea    15.1    15.1 N    Q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            R           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            S           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            T           1262    59135 
   Valley-tea    DATABASE     �   CREATE DATABASE "Valley-tea" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Valley-tea";
                postgres    false            �            1259    59144    Photos    TABLE     �   CREATE TABLE public."Photos" (
    "PhotoID" bigint NOT NULL,
    "ProductID" integer NOT NULL,
    "Path" character varying(255) NOT NULL
);
    DROP TABLE public."Photos";
       public         heap    postgres    false            �            1259    59147    Photos_PhotoID_seq    SEQUENCE     }   CREATE SEQUENCE public."Photos_PhotoID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Photos_PhotoID_seq";
       public          postgres    false    214            U           0    0    Photos_PhotoID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Photos_PhotoID_seq" OWNED BY public."Photos"."PhotoID";
          public          postgres    false    215            �            1259    59148    Product    TABLE     6  CREATE TABLE public."Product" (
    "ProductID" bigint NOT NULL,
    "Name_product" character varying(255) NOT NULL,
    "Country_of_origin" character varying(255) NOT NULL,
    "Impact" character varying(255) NOT NULL,
    "Taste" character varying(255) NOT NULL,
    "Price" integer,
    "Thumbnail" text
);
    DROP TABLE public."Product";
       public         heap    postgres    false            �            1259    59153    Product_ProductID_seq    SEQUENCE     �   CREATE SEQUENCE public."Product_ProductID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Product_ProductID_seq";
       public          postgres    false    216            V           0    0    Product_ProductID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."Product_ProductID_seq" OWNED BY public."Product"."ProductID";
          public          postgres    false    217            �            1259    59154    Sessions    TABLE     c   CREATE TABLE public."Sessions" (
    "SessionID" bigint NOT NULL,
    "UserID" integer NOT NULL
);
    DROP TABLE public."Sessions";
       public         heap    postgres    false            �            1259    59157    Sessions_SessionID_seq    SEQUENCE     �   CREATE SEQUENCE public."Sessions_SessionID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."Sessions_SessionID_seq";
       public          postgres    false    218            W           0    0    Sessions_SessionID_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Sessions_SessionID_seq" OWNED BY public."Sessions"."SessionID";
          public          postgres    false    219            �            1259    59158    Users    TABLE     a  CREATE TABLE public."Users" (
    "UsersID" bigint NOT NULL,
    "User_name" character varying(255) NOT NULL,
    "E_mail" character varying(255) NOT NULL,
    "Password" character varying(255) NOT NULL,
    "Activation_Link" character varying(255) NOT NULL,
    "Admin" boolean DEFAULT false NOT NULL,
    "Activated" boolean DEFAULT false NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    59165    Users_UsersID_seq    SEQUENCE     |   CREATE SEQUENCE public."Users_UsersID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Users_UsersID_seq";
       public          postgres    false    220            X           0    0    Users_UsersID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Users_UsersID_seq" OWNED BY public."Users"."UsersID";
          public          postgres    false    221            �            1259    59296    articles    TABLE     �   CREATE TABLE public.articles (
    id bigint NOT NULL,
    thumbnail text NOT NULL,
    title text NOT NULL,
    description text NOT NULL
);
    DROP TABLE public.articles;
       public         heap    postgres    false            �            1259    59295    articles_id_seq    SEQUENCE     x   CREATE SEQUENCE public.articles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.articles_id_seq;
       public          postgres    false    226            Y           0    0    articles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;
          public          postgres    false    225            �            1259    59305    order_statuses    TABLE     Y   CREATE TABLE public.order_statuses (
    id bigint NOT NULL,
    status text NOT NULL
);
 "   DROP TABLE public.order_statuses;
       public         heap    postgres    false            �            1259    59304    order_statuses_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.order_statuses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.order_statuses_id_seq;
       public          postgres    false    228            Z           0    0    order_statuses_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.order_statuses_id_seq OWNED BY public.order_statuses.id;
          public          postgres    false    227            �            1259    59347    orders    TABLE     �   CREATE TABLE public.orders (
    id text NOT NULL,
    user_id bigint NOT NULL,
    product_id bigint NOT NULL,
    status_id bigint NOT NULL,
    address text NOT NULL,
    fio text NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    59345    orders_product_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.orders_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.orders_product_id_seq;
       public          postgres    false    232            [           0    0    orders_product_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.orders_product_id_seq OWNED BY public.orders.product_id;
          public          postgres    false    230            �            1259    59346    orders_status_id_seq    SEQUENCE     }   CREATE SEQUENCE public.orders_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.orders_status_id_seq;
       public          postgres    false    232            \           0    0    orders_status_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.orders_status_id_seq OWNED BY public.orders.status_id;
          public          postgres    false    231            �            1259    59344    orders_user_id_seq    SEQUENCE     {   CREATE SEQUENCE public.orders_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_user_id_seq;
       public          postgres    false    232            ]           0    0    orders_user_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_user_id_seq OWNED BY public.orders.user_id;
          public          postgres    false    229            �            1259    59166    user_tokens    TABLE     r   CREATE TABLE public.user_tokens (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    token text NOT NULL
);
    DROP TABLE public.user_tokens;
       public         heap    postgres    false            �            1259    59171    user_tokens_id_seq    SEQUENCE     {   CREATE SEQUENCE public.user_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_tokens_id_seq;
       public          postgres    false    222            ^           0    0    user_tokens_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_tokens_id_seq OWNED BY public.user_tokens.id;
          public          postgres    false    223            �            1259    59172    user_tokens_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_tokens_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.user_tokens_user_id_seq;
       public          postgres    false    222            _           0    0    user_tokens_user_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.user_tokens_user_id_seq OWNED BY public.user_tokens.user_id;
          public          postgres    false    224            �           2604    59175    Photos PhotoID    DEFAULT     v   ALTER TABLE ONLY public."Photos" ALTER COLUMN "PhotoID" SET DEFAULT nextval('public."Photos_PhotoID_seq"'::regclass);
 A   ALTER TABLE public."Photos" ALTER COLUMN "PhotoID" DROP DEFAULT;
       public          postgres    false    215    214            �           2604    59176    Product ProductID    DEFAULT     |   ALTER TABLE ONLY public."Product" ALTER COLUMN "ProductID" SET DEFAULT nextval('public."Product_ProductID_seq"'::regclass);
 D   ALTER TABLE public."Product" ALTER COLUMN "ProductID" DROP DEFAULT;
       public          postgres    false    217    216            �           2604    59177    Sessions SessionID    DEFAULT     ~   ALTER TABLE ONLY public."Sessions" ALTER COLUMN "SessionID" SET DEFAULT nextval('public."Sessions_SessionID_seq"'::regclass);
 E   ALTER TABLE public."Sessions" ALTER COLUMN "SessionID" DROP DEFAULT;
       public          postgres    false    219    218            �           2604    59178    Users UsersID    DEFAULT     t   ALTER TABLE ONLY public."Users" ALTER COLUMN "UsersID" SET DEFAULT nextval('public."Users_UsersID_seq"'::regclass);
 @   ALTER TABLE public."Users" ALTER COLUMN "UsersID" DROP DEFAULT;
       public          postgres    false    221    220            �           2604    59299    articles id    DEFAULT     j   ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);
 :   ALTER TABLE public.articles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    59308    order_statuses id    DEFAULT     v   ALTER TABLE ONLY public.order_statuses ALTER COLUMN id SET DEFAULT nextval('public.order_statuses_id_seq'::regclass);
 @   ALTER TABLE public.order_statuses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    59350    orders user_id    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN user_id SET DEFAULT nextval('public.orders_user_id_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    232    229    232            �           2604    59351    orders product_id    DEFAULT     v   ALTER TABLE ONLY public.orders ALTER COLUMN product_id SET DEFAULT nextval('public.orders_product_id_seq'::regclass);
 @   ALTER TABLE public.orders ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    230    232    232            �           2604    59352    orders status_id    DEFAULT     t   ALTER TABLE ONLY public.orders ALTER COLUMN status_id SET DEFAULT nextval('public.orders_status_id_seq'::regclass);
 ?   ALTER TABLE public.orders ALTER COLUMN status_id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    59179    user_tokens id    DEFAULT     p   ALTER TABLE ONLY public.user_tokens ALTER COLUMN id SET DEFAULT nextval('public.user_tokens_id_seq'::regclass);
 =   ALTER TABLE public.user_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    59180    user_tokens user_id    DEFAULT     z   ALTER TABLE ONLY public.user_tokens ALTER COLUMN user_id SET DEFAULT nextval('public.user_tokens_user_id_seq'::regclass);
 B   ALTER TABLE public.user_tokens ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    224    222            <          0    59144    Photos 
   TABLE DATA           B   COPY public."Photos" ("PhotoID", "ProductID", "Path") FROM stdin;
    public          postgres    false    214   OW       >          0    59148    Product 
   TABLE DATA           ~   COPY public."Product" ("ProductID", "Name_product", "Country_of_origin", "Impact", "Taste", "Price", "Thumbnail") FROM stdin;
    public          postgres    false    216   lW       @          0    59154    Sessions 
   TABLE DATA           ;   COPY public."Sessions" ("SessionID", "UserID") FROM stdin;
    public          postgres    false    218   gY       B          0    59158    Users 
   TABLE DATA           x   COPY public."Users" ("UsersID", "User_name", "E_mail", "Password", "Activation_Link", "Admin", "Activated") FROM stdin;
    public          postgres    false    220   �Y       H          0    59296    articles 
   TABLE DATA           E   COPY public.articles (id, thumbnail, title, description) FROM stdin;
    public          postgres    false    226   Z       J          0    59305    order_statuses 
   TABLE DATA           4   COPY public.order_statuses (id, status) FROM stdin;
    public          postgres    false    228   �d       N          0    59347    orders 
   TABLE DATA           R   COPY public.orders (id, user_id, product_id, status_id, address, fio) FROM stdin;
    public          postgres    false    232   @e       D          0    59166    user_tokens 
   TABLE DATA           9   COPY public.user_tokens (id, user_id, token) FROM stdin;
    public          postgres    false    222   �e       `           0    0    Photos_PhotoID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Photos_PhotoID_seq"', 1, false);
          public          postgres    false    215            a           0    0    Product_ProductID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Product_ProductID_seq"', 6, true);
          public          postgres    false    217            b           0    0    Sessions_SessionID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Sessions_SessionID_seq"', 1, false);
          public          postgres    false    219            c           0    0    Users_UsersID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Users_UsersID_seq"', 9, true);
          public          postgres    false    221            d           0    0    articles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.articles_id_seq', 5, true);
          public          postgres    false    225            e           0    0    order_statuses_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.order_statuses_id_seq', 3, true);
          public          postgres    false    227            f           0    0    orders_product_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.orders_product_id_seq', 1, false);
          public          postgres    false    230            g           0    0    orders_status_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.orders_status_id_seq', 1, false);
          public          postgres    false    231            h           0    0    orders_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_user_id_seq', 1, false);
          public          postgres    false    229            i           0    0    user_tokens_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_tokens_id_seq', 169, true);
          public          postgres    false    223            j           0    0    user_tokens_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_tokens_user_id_seq', 1, false);
          public          postgres    false    224            �           2606    59186    Photos Photos_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_pk" PRIMARY KEY ("PhotoID");
 >   ALTER TABLE ONLY public."Photos" DROP CONSTRAINT "Photos_pk";
       public            postgres    false    214            �           2606    59188    Product Product_pk 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pk" PRIMARY KEY ("ProductID");
 @   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pk";
       public            postgres    false    216            �           2606    59190    Sessions Sessions_pk 
   CONSTRAINT     _   ALTER TABLE ONLY public."Sessions"
    ADD CONSTRAINT "Sessions_pk" PRIMARY KEY ("SessionID");
 B   ALTER TABLE ONLY public."Sessions" DROP CONSTRAINT "Sessions_pk";
       public            postgres    false    218            �           2606    59192    Users Users_pk 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pk" PRIMARY KEY ("UsersID");
 <   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pk";
       public            postgres    false    220            �           2606    59303    articles articles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.articles DROP CONSTRAINT articles_pkey;
       public            postgres    false    226            �           2606    59312 "   order_statuses order_statuses_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.order_statuses
    ADD CONSTRAINT order_statuses_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.order_statuses DROP CONSTRAINT order_statuses_pkey;
       public            postgres    false    228            �           2606    59356    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    232            �           2606    59194    user_tokens user_tokens_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_pkey;
       public            postgres    false    222            �           2606    59210    Photos Photos_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_fk0" FOREIGN KEY ("ProductID") REFERENCES public."Product"("ProductID");
 ?   ALTER TABLE ONLY public."Photos" DROP CONSTRAINT "Photos_fk0";
       public          postgres    false    3227    214    216            �           2606    59215    Sessions Sessions_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Sessions"
    ADD CONSTRAINT "Sessions_fk0" FOREIGN KEY ("UserID") REFERENCES public."Users"("UsersID");
 C   ALTER TABLE ONLY public."Sessions" DROP CONSTRAINT "Sessions_fk0";
       public          postgres    false    3231    220    218            �           2606    59362    orders orders_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) REFERENCES public."Product"("ProductID");
 G   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_product_id_fkey;
       public          postgres    false    232    216    3227            �           2606    59367    orders orders_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.order_statuses(id);
 F   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_status_id_fkey;
       public          postgres    false    3237    228    232            �           2606    59357    orders orders_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"("UsersID");
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    220    232    3231            �           2606    59220 $   user_tokens user_tokens_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"("UsersID");
 N   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_user_id_fkey;
       public          postgres    false    3231    222    220            <      x������ � �      >   �  x�e��o�0���_�e�-��M�"E]���&�R��Nk�:Y�6iO�&q	��	�U��������d�}�����>F���nԽ�����^�+�Sݪ������N]�Ku[_j�+x��z��mm(eV<�,פi)�)�,7)/F��*3�ZY�f���C���X����0D�$��`�M����c��G��G�pI��>��H,��#<�NN�#rz~.���hAޤ��eE�1�d�;�9�}e3�D���Y>}.�N�iuQ6��V����fx��;�<p��x2�4D.r}'p=�H��	2a��5310�]YZp�Sr1�CRCc�'\���B2!{r���OȀ�nsz��ރ�r$f�_������]M}���z������OY<j0 �{���$�$eY����4��p_�5�P��m�[v`���|�t_S��껽������j��(��j���P�
b�H����c���؀]�oM]��{�      @      x������ � �      B   �   x���,*��̆R鹉�9z����*FI*&*^�!��^���.y9�&�Y9�>�>�F�F�>A&~fn���.IF��Ɏ9�E%Q����F��憺FIɺ&��i��f�)�F&&�&���I�)�%�i\1z\\\ ��&�      H   �
  x��Y]o�}�~�}l��eh���_Z�@��F�X�YJ�~���r �jk�:i��iQ���\i�䒀�v�BI眙�$���Cbqw�޹3gΜ�������w�olto7���f��n>����4;Ao#��~p��������N/��6>�oﵶ���lnn�s{ck'8��>����z���~�h�A������,��4?��.���8?�fY���,���D.��Q�d1�J���8�g�\�dq~���B���x���wٵ�Ne�T���u�OGN�F��e��˲���e����͸-���m�/�h�����p�GF�$��E��8�X^1��R�o.��e�@v��8�����Iq��r5�����I5�l;Ȧ�8X��rY�C���y�lWSeU��0P6�s����#���3.��ٴ�p:�aә܇�`���>!>���"V��U���$#Z��И���������D︁(̼S��H, 
���!t��+`<ڹ�/q:�fl"AO�d.{�}"��L<������`}~.VWB(�p\�%-�,���t�7��н�,���r��q�������F�E� �!O��f�,����h�����%���wŒ���g�.!Hy����t
6��$��)M<#f�3@��>4e���[>8�����+����T����Cً���x�Lf(�)�_��3.2�����Y��z���Շ��n�	vy��G{���㺼���Q�h\&�Z���W������i�oA��hȔ��(���xI.8c�:t��Lݷ�H��b��0�mSYt�y����pY��@�a�9�I?��)/�����,� p ��f�B�ͼ<�����D�I��'{\#�Œ���Y���ޚ�om*�������Z�)P�G���8�HSM��o��F��T�e8��$��.����<�},��MHt�D�%�&�d��[ԁ�\]�{c1VRv.�M>���E�j�."��L���өB%����A{���^%�sU�c,R��J�
��3���`�T0ZE����:��h�������w���Jo<�L�W�A�jBp0-_C��%dQ�G�y�S_��8��GH
�Uh��X�q�6��T��+�[w�o�����c�7�5�O#�@�5V��.zՎ��&� p-�@K�؀&;�@PK�KW�YL3u�lW�*p�԰\��J��4(��#�˟W�hj��,IU��d��[^|R�tJ�r��*s�}�MZL�*�r�z]��rLj�\b�Y�D��x��� B��9D����iX�n^:��p�a
ʺ����&��WbU}���ğA��u�K���K���V�`T�}ķ�+��u��^O� ?-��Cm��
�LG�a����Pl^Ky�Pj�XN�ɋ�
����ҷX;�ڕ��V+�7�����R�i���/��������hZ�8���k�q�CF.%�xI���MDV�	��4�E�S;� ���!.S�0.L��V���̔y�.���=@B4�,��F�؋�qCգ�%��jJ�R�d�a�QR��k,L_�	A�~��UN�"G�k/"�d7�R����JRW�+x*%,ݕ�"#�@ِ�H[�͋7�V��GD��j;Zh�ASS6QZi)i�a���'��*�Uo�n�%� WJ��
����M|<����f�6����	�E��������.F-?�/tq®�*��`��b�挝s�J�cm�X8��H�N	f�E�Ֆ�E��jI�\QpIq<R�L���<�<Δ��/M1�^��Z�$�(YQ	��o���Q��&�8��>&�Tq�xh��ZO}�Ka�M	�i8��X���.@tC���}Eb�4Ǹ���(�M�~�`��^�U��� :�����WBE1�	���QRr�R9i�=�s�����,���ݽRڮ��Z������v��+�oj�ojC��I0h�άH}�6 {���V��i��:�ڻ���o��[���{� h=������P���#��+M���+gp��u=ǐ[��,Nk��yF4N8�;e(�UZ�lBXU�}��=���U�fʠ�N�8h�T�;�Ѕ�D�f�ʣ�,��"�d/��(����7��eY�U�m�:��2��������U���Ǘ�5�ʐC�EQe<H�<��LS��<r�D��(
��ۯɖ�=�B��?�K@�G��(4�a�G���G:���QyL&��ߟ�di��ɫԋk˿�E/�11~_��m�������<�ćU���>���m�C\�2N��E��*K�tנjY��L
�/�hV:G��`f-�B[Zv)��>u�k6�&�w�$�*��s��n�^�a��������W� pہ��|��5iٖg�U
��Ը��8��r-G�zc���E��zv3"X��b�U����z���nOM�V��L˯#�m���6��tFgv������ɔ�x�>�TrU9��Z���#b��f1@�R+9���/�3��䵯�bR��F�bV�r J���eJ/��+�ab�6��b�$B땽2Tz��hK#�!h䉥�V-s����e{P��^���F�W+��A��ߎ|�w���_�Uh��D(���_�1ϫ���?#�P�Gx���j��U�mi��,��5�T9����r5��~�(�N%�^��)�ówC?V�Ȯ�ypa�������FuAY�bSfҠ�A5��o�+&s�* cvE�ę�!�cIw���BYS
"5�f����������      J   C   x�3估�¾/��paÅ��.6^��2�0��> �	(�����p)c4�[/콰�+F��� �b/�      N   �   x��N��0��)< /�ɋ!��<;�|
ZDK�!J� ��a��t��b��a������^9!o�mM�U�beU:�Yj\�.�1^�	��aZh��������\��9wC�o�,ƴń��<�x�ݯ��y�9� ,a)k���
5"5�hV>T�2u�=���hSE�Vx��      D   g  x��QMs�0<�qT�cˇ&��CH2��!@([�__h/�O�Lﲳ�o�[hog��|�E���AcR�:�D��E6�Z�]�,FR ,X��~"���ۧ�����wi9W�{�����h��~r�\Fmn��P�*�=�G�g�k]�I�ó�ҨlS��|��:�:�C��?23zhT3�VǚƉ�ߎͣJy���鞾�>'*�W�щa�����jeiR�k	���;�)q�����]P1\��aI��Nv�|bQ!y=09(ܩB����B���ѫ�b�Y���{�|@�񩆯��&W����4`��4.��
.d��_Y{�z"���Y�=(��77z	�9�����Veϋ�|�	V3�     